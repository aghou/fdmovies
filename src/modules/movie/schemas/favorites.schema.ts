import { RouteShorthandOptions } from 'fastify';
import { ListQuerystringSchema } from './list.schema';

/**
 * Search QueryString
 */
export const FavoritesBodySchema = {
  type: 'object',
  additionalProperties: false,
  required: ['targetId', 'title'],
  properties: {
    targetId: {
      type: 'integer',
      minimum: 1,
    },
    title: {
      type: 'string',
      minLength: 2,
    },
  },
};

/**
 * GetFvorites Routes Options
 */
export const GetFavoritesOps: RouteShorthandOptions = {
  schema: {
    querystring: ListQuerystringSchema,
    response: {
      401: { type: 'string' },
      400: { type: 'string' },
      200: {
        type: 'array',
        items: {
          properties: FavoritesBodySchema.properties,
        },
      },
    },
  },
};

/**
 * AddToFavorites Routes Options
 */
export const AddToFavoritesOps: RouteShorthandOptions = {
  schema: {
    body: FavoritesBodySchema,
    response: {
      401: { type: 'string' },
      400: { type: 'string' },
      200: { type: 'string' },
    },
  },
};

/**
 * RemoveFavorites Routes Options
 */
export const RemoveFavoritesOps: RouteShorthandOptions = {
  schema: {
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: {
          type: 'integer',
          minimum: 1000,
        },
      },
    },
    response: {
      401: { type: 'string' },
      400: { type: 'string' },
      200: { type: 'string' },
    },
  },
};
