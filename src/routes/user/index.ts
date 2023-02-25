import { FastifyPluginAsync } from 'fastify';
import { SigninOps } from '../../modules/user/schemas/signin.schema';
import { SignupOps } from '../../modules/user/schemas/signup.schema';
import { signInHandler, signUpHandler } from '../../modules/user/user.controller';
import UserPlugin from '../../modules/user/user.plugin';
import { MongoDB } from '../../plugins/mongodb';

const user: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(MongoDB);
  fastify.register(UserPlugin);
  fastify.post('/signin', SigninOps, signInHandler);
  fastify.post('/signup', SignupOps, signUpHandler);
  fastify.get('/doc', async function (request, reply) {
    return request.server.swagger();
  });
};

export default user;
