import { FastifyPluginAsync } from 'fastify';
import {
  addToFavoritesHandler,
  favoritesListHandler,
  removeFromFavoritesHandler,
} from '../../modules/favorites/favorites.controller';
import { ListOps } from '../../modules/movie/schemas/list.schema';
import { MongoDB } from '../../plugins/mongodb';
import FavoritesPlugin from '../../modules/favorites/favorites.plugin';

const tv: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(MongoDB);
  fastify.register(FavoritesPlugin);
  fastify.get('/', ListOps, favoritesListHandler);
  fastify.post('/', addToFavoritesHandler);
  fastify.delete('/:id', removeFromFavoritesHandler);
};

export default tv;
