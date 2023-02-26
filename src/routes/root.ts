import { FastifyPluginAsync } from 'fastify';
import { searchHandler } from '../modules/movie/movie.controller';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  /**
   * Movies and Tv search endpoint
   */
  fastify.get('/search', searchHandler);

  /**
   * Helth check endpoint
   */
  fastify.get('/health', async function (request, reply) {
    reply.send('OK');
  });

  /**
   * OpenAPI endpoint
   */
  fastify.get(
    '/openapi',
    {
      schema: { hide: true },
    },
    async function (request, reply) {
      reply.send(request.server.swagger());
    },
  );
};

export default root;
