import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().default(3000),
  GLOBAL_PREFIX: Joi.string().default(''),
  ADMIN_USERNAME: Joi.string().required(),
  ADMIN_EMAIL: Joi.string().email().required(),
  ADMIN_PASSWORD: Joi.string().required(),
  JWT_IGNORE_EXPIRATION: Joi.boolean().default(false),
  JWT_ACCESS_SECRET_KEY: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('1d').valid('1d', '7d', '14d', '30d'),
});
