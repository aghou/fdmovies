import { FastifyPluginAsync } from 'fastify';
import {
  movieItemHandler,
  moviesListHandler,
  topMoviesListHandler,
  videoTrailerHandler,
} from '../../modules/movie/movie.controller';
import { ListOps } from '../../modules/movie/schemas/list.schema';
import { MongoDB } from '../../plugins/mongodb';

const movie: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(MongoDB);
  fastify.get('/', ListOps, moviesListHandler);
  fastify.get('/top', topMoviesListHandler);
  fastify.get('/:id', movieItemHandler);
  fastify.get('/:id/video', videoTrailerHandler);
};

export default movie;
