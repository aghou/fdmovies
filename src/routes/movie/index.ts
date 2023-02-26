import { FastifyPluginAsync } from 'fastify';
import {
  addToFavoritesHandler,
  favoritesListHandler,
  movieItemHandler,
  moviesListHandler,
  moviesSearchHandler,
  removeFromFavoritesHandler,
  topMoviesListHandler,
  videoTrailerHandler,
} from '../../modules/movie/movie.controller';
import { ListOps } from '../../modules/movie/schemas/list.schema';
import { MongoDB } from '../../plugins/mongodb';
import MoviePlugin from '../../modules/movie/movie.plugin';
import { SearchOps } from '../../modules/movie/schemas/search.schema';
import { AddToFavoritesOps, GetFavoritesOps, RemoveFavoritesOps } from '../../modules/movie/schemas/favorites.schema';
import { AuthPlugin } from '../../plugins/auth';

const movie: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(AuthPlugin);
  fastify.register(MongoDB);
  fastify.register(MoviePlugin);
  fastify.get('/', ListOps, moviesListHandler);
  fastify.get('/search', SearchOps, moviesSearchHandler);
  fastify.get('/top', topMoviesListHandler);
  fastify.get('/:id', movieItemHandler);
  fastify.get('/:id/videos', videoTrailerHandler);
  fastify.get('/favorites', GetFavoritesOps, favoritesListHandler);
  fastify.post('/favorites', AddToFavoritesOps, addToFavoritesHandler);
  fastify.delete('/favorites/:id', RemoveFavoritesOps, removeFromFavoritesHandler);
};

export default movie;
