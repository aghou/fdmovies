import { RouteShorthandOptions } from 'fastify';

/**
 * Search QueryString
 */
export const SearchQuerystringSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['query'],
  properties: {
    page: {
      type: 'integer',
      minimum: 1,
      maximum: 1000,
    },
    query: {
      type: 'string',
      minLength: 1,
    },
  },
};

/**
 * List Routes Options
 */
export const SearchOps: RouteShorthandOptions = {
  schema: {
    querystring: SearchQuerystringSchema,
    response: {
      401: { type: 'string' },
      400: { type: 'string' },
      200: { type: 'array' },
    },
  },
};
