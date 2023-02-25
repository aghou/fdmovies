import { test } from 'tap';
import Fastify from 'fastify';
import { MongoDB } from '../../../src/plugins/mongodb';
import UserPlugin from '../../../src/modules/user/user.plugin';
import { UserService } from '../../../src/modules/user/user.service';
import { UserRepository } from '../../../src/modules/user/user.repository';

test('User plugin', async (t) => {
  const fastify = Fastify();
  void fastify.register(MongoDB);
  void fastify.register(UserPlugin);
  await fastify.ready();
  t.teardown(() => {
    fastify.mongo.client.close();
  });
  t.plan(6);

  t.ok(fastify.user);
  t.type(fastify.user, 'object');

  // Force Running beforeHandler hook
  // for initialize user.service and user.repo
  await fastify.inject({ path: '/health' });
  t.ok(fastify.user.service);
  t.ok(fastify.user.service instanceof UserService);
  t.ok(fastify.user.repo);
  t.ok(fastify.user.repo instanceof UserRepository);
});
