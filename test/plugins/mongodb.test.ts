import { test } from 'tap';
import Fastify from 'fastify';
import { MongoDB, getMongodbURL } from '../../src/plugins/mongodb';

test('Mongodb plugin', async (t) => {
  const fastify = Fastify();
  void fastify.register(MongoDB);
  await fastify.ready();
  t.teardown(() => {
    fastify.mongo.client.close();
  });
  t.plan(3);

  t.ok(fastify.mongo);
  t.type(fastify.mongo, 'object');
  t.ok(fastify.mongo.db);
});

test('getMongodbURL function', async (t) => {
  t.equal(getMongodbURL(), 'mongodb://localhost:27017/fdmovies');
  process.env['MONGO_DB'] = 'otherdb';
  t.equal(getMongodbURL(), 'mongodb://localhost:27017/otherdb');
  process.env['MONGO_HOST'] = 'serverprod';
  process.env['MONGO_PORT'] = '27002';
  process.env['MONGO_USERNAME'] = 'user';
  process.env['MONGO_PASSWORD'] = 'pass';
  t.equal(getMongodbURL(), 'mongodb://user:pass@serverprod:27002/otherdb');
  process.env['MONGO_URL'] = 'mongodb://127.0.0.1:27017/movies';
  t.equal(getMongodbURL(), 'mongodb://127.0.0.1:27017/movies');
});
