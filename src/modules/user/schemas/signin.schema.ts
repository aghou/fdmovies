import { RouteShorthandOptions } from 'fastify';
import { AccessTokenResponseSchema } from './user.schema';

/**
 * Signin schema
 */
export const SigninSchema = {
  type: 'object',
  required: ['username', 'password'],
  additionalProperties: false,
  properties: {
    username: {
      type: 'string',
      minLength: 2,
      pattern: '^[a-z][a-z0-9_]{3,30}$',
    },
    password: {
      type: 'string',
      minLength: 4,
    },
  },
};

/**
 * Signin Routes Options
 */
export const SigninOps: RouteShorthandOptions = {
  schema: {
    body: SigninSchema,
    response: {
      401: { type: 'string' },
      200: AccessTokenResponseSchema,
    },
  },
};
