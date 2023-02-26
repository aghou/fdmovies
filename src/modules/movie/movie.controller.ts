import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * Movies List
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const moviesListHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.movie.service?.getList();
};

/**
 * Movie Item
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const movieItemHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.movie.service?.getItem();
};

/**
 * Top Movies List
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const topMoviesListHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.movie.service?.getTopList();
};

/**
 * Search Movies / Tv (Series TV)
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const moviesSearchHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.movie.service?.getSearch();
};

/**
 * Get video trailer
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const videoTrailerHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.movie.service?.getVideoTrailer();
};
