import { FastifyPluginAsync } from 'fastify';
import {
  addToFavoritesHandler,
  favoritesListHandler,
  removeFromFavoritesHandler,
  topTvListHandler,
  tvItemHandler,
  tvListHandler,
  tvSearchHandler,
  videoTrailerHandler,
} from '../../modules/tv/tv.controller';
import { ListOps } from '../../modules/movie/schemas/list.schema';
import { MongoDB } from '../../plugins/mongodb';
import TvPlugin from '../../modules/tv/tv.plugin';
import { SearchOps } from '../../modules/movie/schemas/search.schema';
import { AddToFavoritesOps, GetFavoritesOps, RemoveFavoritesOps } from '../../modules/movie/schemas/favorites.schema';
import { AuthPlugin } from '../../plugins/auth';

const tv: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(AuthPlugin);
  fastify.register(MongoDB);
  fastify.register(TvPlugin);
  fastify.get('/', ListOps, tvListHandler);
  fastify.get('/search', SearchOps, tvSearchHandler);
  fastify.get('/top', topTvListHandler);
  fastify.get('/:id', tvItemHandler);
  fastify.get('/:id/videos', videoTrailerHandler);
  fastify.get('/favorites', GetFavoritesOps, favoritesListHandler);
  fastify.post('/favorites', AddToFavoritesOps, addToFavoritesHandler);
  fastify.delete('/favorites/:id', RemoveFavoritesOps, removeFromFavoritesHandler);
};

export default tv;
