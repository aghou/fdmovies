import { test } from 'tap';
import Fastify from 'fastify';
import Swagger from '../../src/plugins/swagger';

test('Swagger plugin', async (t) => {
  const fastify = Fastify();
  void fastify.register(Swagger);
  await fastify.ready();

  t.type(fastify.swagger, 'function', 'Plugin registered');
  t.type(fastify.swagger(), 'object', 'swagger() return an object');
});
