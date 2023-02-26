import { FastifyPluginAsync } from 'fastify';
import { topTvListHandler, tvItemHandler, tvListHandler, videoTrailerHandler } from '../../modules/tv/tv.controller';
import { ListOps } from '../../modules/movie/schemas/list.schema';
import { MongoDB } from '../../plugins/mongodb';

const tv: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(MongoDB);
  fastify.get('/', ListOps, tvListHandler);
  fastify.get('/top', topTvListHandler);
  fastify.get('/:id', tvItemHandler);
  fastify.get('/:id/video', videoTrailerHandler);
};

export default tv;
