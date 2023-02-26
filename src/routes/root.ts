import { FastifyPluginAsync } from 'fastify';
import { readFileSync } from 'fs';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  /**
   * Helth check endpoint
   */
  fastify.get('/health', { schema: { hide: true } }, async function (request, reply) {
    reply.send('OK');
  });

  /**
   * Documentation html
   */
  fastify.get('/documentation', { schema: { hide: true } }, async function (request, reply) {
    const doc = readFileSync(__dirname + '/../assets/html/redoc.html', { encoding: 'utf8' });
    reply.header('content-type', 'text/html');
    reply.send(doc);
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
