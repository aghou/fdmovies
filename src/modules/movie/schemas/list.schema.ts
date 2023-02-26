import { RouteShorthandOptions } from 'fastify';

/**
 * List QueryString
 */
export const ListQuerystringSchema = {
  type: 'object',
  required: ['page'],
  additionalProperties: false,
  properties: {
    page: {
      type: 'integer',
      minimum: 1,
      maximum: 1000,
    },
  },
};

/**
 * List Routes Options
 */
export const ListOps: RouteShorthandOptions = {
  schema: {
    querystring: ListQuerystringSchema,
    response: {
      401: { type: 'string' },
      200: { type: 'array' },
    },
  },
};
