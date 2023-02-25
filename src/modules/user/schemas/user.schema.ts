/**
 * User schema
 */
export const UserSchema = {
  type: 'object',
  required: ['first_name', 'last_name', 'username', 'email'],
  additionalProperties: false,
  properties: {
    fist_name: {
      type: 'string',
      minLength: 2,
    },
    last_name: {
      type: 'string',
      minLength: 2,
    },
    username: {
      type: 'string',
      minLength: 4,
      pattern: '^[a-z][a-z0-9_]{3,30}$',
    },
    email: {
      type: 'string',
      format: 'email',
    },
  },
};

export const AccessTokenResponseSchema = {
  type: 'object',
  required: ['access_token'],
  additionalProperties: false,
  properties: {
    access_token: {
      type: 'string',
    },
  },
};
