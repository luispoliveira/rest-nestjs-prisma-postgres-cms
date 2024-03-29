export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),
  globalPrefix: process.env.GLOBAL_PREFIX || '',
  admin: {
    username: process.env.ADMIN_USERNAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },
  jwtSecretKey: {
    ignoreExpiration: process.env.JWT_IGNORE_EXPIRATION,
    access: process.env.JWT_ACCESS_SECRET_KEY,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});
