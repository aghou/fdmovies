import fp from 'fastify-plugin';
import { TvRepository } from './tv.repository';
import { TvService } from './tv.service';

export interface TvPluginModel {
  service?: TvService;
  repo?: TvRepository;
}

export default fp(async (fastify) => {
  fastify.decorate('tv', <TvPluginModel>{});

  fastify.addHook('preHandler', (request, reply, done) => {
    fastify.tv.service = new TvService(request, reply);
    fastify.tv.repo = new TvRepository(request, reply);
    done();
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    tv: TvPluginModel;
  }
}
