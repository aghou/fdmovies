import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * Sign In ( Login )
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const signInHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  return request.server.user.service?.login();
  //return "tokk";
};

/**
 * Sign Up ( Registration )
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
export const signUpHandler = async (request: FastifyRequest) => {
  return request.server.user.service?.register();
};
