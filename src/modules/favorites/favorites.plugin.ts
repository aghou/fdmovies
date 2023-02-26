import fp from 'fastify-plugin';
import { FavoritesRepository } from './favorites.repository';
import { FavoritesService } from './favorites.service';

export interface FavoritesPluginModel {
  service?: FavoritesService;
  repo?: FavoritesRepository;
}

export default fp(async (fastify) => {
  fastify.decorate('favorites', <FavoritesPluginModel>{});

  fastify.addHook('preHandler', (request, reply, done) => {
    fastify.favorites.service = new FavoritesService(request, reply);
    fastify.favorites.repo = new FavoritesRepository(request, reply);
    done();
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    favorites: FavoritesPluginModel;
  }
}
