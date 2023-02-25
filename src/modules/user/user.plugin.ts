import fp from 'fastify-plugin';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

export interface UserPluginModel {
  service?: UserService;
  repo?: UserRepository;
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp(async (fastify) => {
  fastify.decorate('user', <UserPluginModel>{});

  fastify.addHook('preHandler', (request, reply, done) => {
    fastify.user.service = new UserService(request, reply);
    fastify.user.repo = new UserRepository(request, reply);
    done();
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    user: UserPluginModel;
  }
}
