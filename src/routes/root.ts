import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
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
