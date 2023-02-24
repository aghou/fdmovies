import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';

/**
 * Add support for API Documentation with OpenAPI Specs
 */
export default fp(async (fastify) => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Factory Digital Movies Backend API',
        description: 'API Documentation for Factory Digital Movies Backend Project',
        version: '0.0.1',
      },
    },
  });
});
