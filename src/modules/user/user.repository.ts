import { FastifyReply, FastifyRequest } from 'fastify';
import { Db, Document, InsertOneResult, WithId } from 'mongodb';
import { UserInterface } from './user.interfaces';
import * as bcrypt from 'bcrypt';

/**
 * UserRepository class
 * @author Zahir Saad Bouzid<zahirnet@gmail.com>
 */
export class UserRepository {
  request: FastifyRequest;
  reply: FastifyReply;
  db: Db | undefined;
  constructor(request: FastifyRequest, reply: FastifyReply) {
    this.request = request;
    this.reply = reply;
    this.db = request.server.mongo.db;
  }

  /**
   * Get user document identified by username
   * @param {string} username
   * @return {Promise<WithId<Document>|null|undefined>}
   */
  async getUserByUsername(username: string): Promise<WithId<Document> | null | undefined> {
    return await this.db?.collection('users').findOne({
      username: username,
    });
  }

  /**
   * Create new user on users collection
   * @param {UserInterface} data
   * @return {Promise<InsertOneResult<Document>|undefined>}
   */
  async createNewUser(data: UserInterface): Promise<InsertOneResult<Document> | undefined> {
    const cryptedPass = bcrypt.hashSync(data.password as string, 10);
    const user = Object.assign({}, data, { password: cryptedPass, createdAt: new Date() });
    return await this.db?.collection('users').insertOne(user);
  }
}
