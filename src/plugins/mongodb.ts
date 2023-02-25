import fp from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';

/**
 * Add support for Mongodb
 */
export const MongoDB = fp(async (fastify, opts = {}) => {
  fastify.register(
    fastifyMongo,
    Object.assign(
      {
        url: getMongodbURL(),
        database: process.env.MONGO_DB || 'fdmovies',
      },
      opts,
    ),
  );
});

/**
 * Generate mongodb URL
 * @return {string}
 */
export function getMongodbURL(): string {
  const { MONGO_URL, MONGO_DB, MONGO_HOST, MONGO_PORT, MONGO_USERNAME, MONGO_PASSWORD } = process.env;

  if (MONGO_URL) {
    return MONGO_URL;
  }
  let url = `mongodb://`;
  url += MONGO_USERNAME && MONGO_PASSWORD ? `${MONGO_USERNAME}:${MONGO_PASSWORD}@` : '';
  url += `${MONGO_HOST || 'localhost'}:${MONGO_PORT || '27017'}/${MONGO_DB || 'fdmovies'}`;
  return url;
}
