import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * Tv List (Series TV)
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const tvListHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getTvList();
};

/**
 * Tv Item
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const tvItemHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getTvItem();
};

/**
 * Top Tv List
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const topTvListHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getTopTvList();
};

/**
 * Get video trailer
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const videoTrailerHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getVideoTrailer();
};

/**
 * Search Tv (Series TV)
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const tvSearchHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getSearch();
};
