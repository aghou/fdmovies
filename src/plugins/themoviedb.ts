import fp from 'fastify-plugin';
import axios, { AxiosInstance } from 'axios';

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp(async (fastify) => {
  const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 10000,
    responseType: 'text',
    headers: {
      Authorization: `Bearer ${process.env.THEMOVIEDB_ACCESS_TOKEN || 'set me'}`,
    },
  });
  fastify.decorate('themoviedb', instance);
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    themoviedb: AxiosInstance;
  }
}
