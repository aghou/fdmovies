import fp from 'fastify-plugin';
import { MovieRepository } from './movie.repository';
import { MovieService } from './movie.service';

export interface MoviePluginModel {
  service?: MovieService;
  repo?: MovieRepository;
}

export default fp(async (fastify) => {
  fastify.decorate('movie', <MoviePluginModel>{});

  fastify.addHook('preHandler', (request, reply, done) => {
    fastify.movie.service = new MovieService(request, reply);
    fastify.movie.repo = new MovieRepository(request, reply);
    done();
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    movie: MoviePluginModel;
  }
}
