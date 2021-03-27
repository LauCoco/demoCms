module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '98fea5e56d9f3f1e37e7470b8b52e962'),
    },
  },
  cron: {
    enabled: false
  }
});
