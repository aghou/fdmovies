import * as jwt from 'jsonwebtoken';
import { test, beforeEach, afterEach } from 'tap';
import Fastify from 'fastify';
import { MongoDB } from '../../../src/plugins/mongodb';
import UserPlugin from '../../../src/modules/user/user.plugin';
import { UserService } from '../../../src/modules/user/user.service';

beforeEach(async (t) => {
  const fastify = Fastify();
  fastify.register(MongoDB);
  fastify.register(UserPlugin);
  await fastify.ready();
  // create test user directly on database
  await fastify.mongo.db?.collection('users').insertOne({
    first_name: 'tester',
    last_name: 'auto',
    email: 'auto@tester.dev',
    username: 'test',
    password: '$2b$10$TfwlyXfLWHyH/MBXe15rl.BsyNPmwZq8APSnUcFwMi8L65YuUHb1.',
  });
  t.context.fastify = fastify;
});

afterEach(async (t) => {
  // delete created test user from database
  const fastify = t.context.fastify;
  await fastify.mongo.db?.collection('users').deleteMany({ username: 'test' });
  await fastify.mongo.db?.collection('users').deleteOne({ username: 'user1' });
  fastify.mongo.client.close();
});

test('User service SignIn (Login)', async (t) => {
  const fastify = t.context.fastify;
  t.plan(5);

  t.ok(fastify.user);

  // Force Running beforeHandler hook
  // for initialize user.service
  await fastify.inject({
    method: 'POST',
    path: '/health',
    payload: {
      username: 'test',
      password: 'test',
    },
  });
  t.ok(fastify.user.service);
  t.ok(fastify.user.service instanceof UserService);
  const result = await fastify.user.service?.login();
  t.type(result?.access_token, 'string');
  try {
    const decoded = jwt.verify(result?.access_token as string, (process.env.JWT_SECRET as string) || 'secret');
    t.equal((decoded as jwt.JwtPayload).email, 'auto@tester.dev', 'Compare user email from token');
  } catch (e) {
    t.error(e, 'SignIn - Jwt verify token fail');
  }
});

test('User service SignUp (Registration)', async (t) => {
  const fastify = t.context.fastify;
  t.plan(5);
  t.ok(fastify.user);

  await fastify.inject({
    method: 'POST',
    path: '/health',
    payload: {
      username: 'user1',
      password: 'test',
      first_name: 'user',
      last_name: 'one',
      email: 'user1@one.dev',
    },
  });
  t.ok(fastify.user.service);
  t.ok(fastify.user.service instanceof UserService);
  const result = await fastify.user.service?.register();
  t.type(result?.access_token, 'string');
  try {
    const decoded = jwt.verify(result?.access_token as string, (process.env.JWT_SECRET as string) || 'secret');
    t.equal((decoded as jwt.JwtPayload).email, 'user1@one.dev', 'Compare user email from token');
  } catch (e) {
    t.error(e, 'SignUp - Jwt verify token fail');
  }
});

test('User service SignUp (Registration with existing user)', async (t) => {
  const fastify = t.context.fastify;
  t.plan(4);
  t.ok(fastify.user);

  await fastify.inject({
    method: 'POST',
    path: '/health',
    payload: {
      username: 'test',
      password: 'test',
      first_name: 'user1',
      last_name: 'one',
      email: 'auto@tester.dev',
    },
  });
  t.ok(fastify.user.service);
  t.ok(fastify.user.service instanceof UserService);
  try {
    await fastify.user.service?.register();
    t.fail('Should throw UserExistsException');
  } catch (e) {
    t.ok(e, 'Got User already exists exception');
  }
});
