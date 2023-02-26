import { FastifyReply, FastifyRequest } from 'fastify';
/**
 * Get favorites list
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const favoritesListHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.favorites.service?.getFavoritesList();
};

/**
 * Add to favorites
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const addToFavoritesHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.favorites.service?.addToFavorites();
};

/**
 * Remove from favorites
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const removeFromFavoritesHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.favorites.service?.removeFromFavorites();
};
