import { DoneFuncWithErrOrRes, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import * as jwt from 'jsonwebtoken';
import { UserIdentity } from '../modules/user/user.interfaces';

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export const AuthPlugin = fp(async (fastify) => {
  fastify.decorateRequest('identity', null);
  fastify.addHook('onRequest', verifyToken);
});

/**
 * Check user identity on verify access_token in request headers
 * and set user identity on the request
 */
function verifyToken(request: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes) {
  const token = getBearerToken(request);
  try {
    const tokenContent = jwt.verify(token, (process.env as any).JWT_SECRET || 'secret') as UserIdentity;
    request.identity = tokenContent;
  } catch (err) {
    throw request.server.httpErrors.unauthorized('Invalid access token');
  }
  done();
}

/**
 * Get access_token from headers
 */
function getBearerToken(request: FastifyRequest): string {
  const parts = typeof request.headers.authorization == 'string' ? request.headers.authorization.trim().split(' ') : [];
  if (parts.length != 2 || parts[0].toLowerCase() != 'bearer') {
    throw request.server.httpErrors.unauthorized('Authentication is required');
  }
  return parts[1];
}

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyRequest {
    identity: UserIdentity;
  }
}
