import { RouteShorthandOptions } from 'fastify';
import { AccessTokenResponseSchema, UserSchema } from './user.schema';

/**
 * Signup schema
 */
export const SignupSchema = {
  type: 'object',
  required: ['password', ...UserSchema.required],
  additionalProperties: false,
  properties: Object.assign({}, UserSchema.properties, {
    password: {
      type: 'string',
      minLength: 4,
    },
  }),
};

/**
 * Signup Routes Options
 */
export const SignupOps: RouteShorthandOptions = {
  schema: {
    body: SignupSchema,
    response: {
      401: { type: 'string' },
      200: AccessTokenResponseSchema,
    },
  },
};
