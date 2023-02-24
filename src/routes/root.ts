import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  /**
   * Helth check endpoint
   */
  fastify.get('/health', async function (request, reply) {
    return 'OK'
  })

  /**
   * OpenAPI endpoint
   */
  fastify.get('/openapi', {
    schema: { hide: true } as any
    },
    async function (request, reply) {
    return request.server.swagger();
  })
}

export default root;
