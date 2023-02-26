import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * Tv List (Series TV)
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const tvListHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getList();
};

/**
 * Tv Item
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const tvItemHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getItem();
};

/**
 * Top Tv List
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const topTvListHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getTopList();
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

/**
 * Get favorites list
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const favoritesListHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.getFavoritesList();
};

/**
 * Add to favorites
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const addToFavoritesHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.addToFavorites();
};

/**
 * Remove from favorites
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const removeFromFavoritesHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.tv.service?.removeFromFavorites();
};
