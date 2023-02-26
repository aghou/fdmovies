import { FastifyPluginAsync } from 'fastify';
import {
  movieItemHandler,
  moviesListHandler,
  moviesSearchHandler,
  topMoviesListHandler,
  videoTrailerHandler,
} from '../../modules/movie/movie.controller';
import { ListOps } from '../../modules/movie/schemas/list.schema';
import { MongoDB } from '../../plugins/mongodb';
import MoviePlugin from '../../modules/movie/movie.plugin';
import { SearchOps } from '../../modules/movie/schemas/search.schema';

const movie: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(MongoDB);
  fastify.register(MoviePlugin);
  fastify.get('/', ListOps, moviesListHandler);
  fastify.get('/search', SearchOps, moviesSearchHandler);
  fastify.get('/top', topMoviesListHandler);
  fastify.get('/:id', movieItemHandler);
  fastify.get('/:id/videos', videoTrailerHandler);
};

export default movie;
