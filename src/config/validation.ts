import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().default(3000),
  GLOBAL_PREFIX: Joi.string().default(''),
  ADMIN_USERNAME: Joi.string().required(),
  ADMIN_EMAIL: Joi.string().email().required(),
  ADMIN_PASSWORD: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
});
