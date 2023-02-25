import { FastifyReply, FastifyRequest } from 'fastify';
import { UserRepository } from './user.repository';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { SigninInterface, UserInterface } from './user.interfaces';
import { UserExistsException, UserPasswordException } from './user.exceptions';

/**
 * UserService class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class UserService {
  request: FastifyRequest;
  reply: FastifyReply;
  constructor(request: FastifyRequest, reply: FastifyReply) {
    this.request = request;
    this.reply = reply;
  }

  /**
   * Register a new user (Sign up)
   * @return {TokenWrapperResponse}
   */
  async register(): Promise<TokenWrapperResponse> {
    // Get user from a database
    const user = await this.getRepository().getUserByUsername((this.request.body as UserInterface).username);
    if (user) {
      throw new UserExistsException();
    }

    // Store new user on database
    const created = await this.getRepository().createNewUser(this.request.body as UserInterface);
    if (!created) {
      throw new Error('Error was occured');
    }

    // Create Jwt token
    const payload = this.getJwtPayload(created.insertedId.toString(), this.request.body as UserInterface);
    const token = jwt.sign(payload, (process.env.JWT_SECRET as string) || 'secret', {
      expiresIn: process.env.JWT_EXPIRE || '1d',
    });

    return this.formatResponse(token);
  }

  /**
   * Login user (Sign ip)
   * @return {TokenWrapperResponse}
   */
  async login(): Promise<TokenWrapperResponse> {
    // Get user from database
    const user = (await this.getRepository().getUserByUsername(
      (this.request.body as UserInterface).username,
    )) as UserInterface;
    if (!user) {
      throw new UserExistsException('User do not exists');
    }

    // Compare user password
    if (!(await bcrypt.compare((this.request.body as SigninInterface).password, user.password))) {
      throw new UserPasswordException();
    }

    // Create Jwt token
    const payload = this.getJwtPayload(user._id.toString(), user);
    const token = jwt.sign(payload, (process.env.JWT_SECRET as string) || 'secret', {
      expiresIn: process.env.JWT_EXPIRE || '1d',
    });

    return this.formatResponse(token);
  }

  /**
   * Get UserRepository instance
   * @return {UserRepository}
   */
  getRepository(): UserRepository {
    return this.request.server.user.repo as UserRepository;
  }

  /**
   * Prepare and get JwtPayload
   * @return {jwt.JwtPayload}
   */
  getJwtPayload(userId: string, data: UserInterface): jwt.JwtPayload {
    //const data = this.request.body as jwt.JwtPayload;
    return {
      sub: userId,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      username: data.username,
    };
  }

  private formatResponse(token: string): TokenWrapperResponse {
    return { access_token: token };
  }
}

export interface TokenWrapperResponse {
  access_token: string;
}
