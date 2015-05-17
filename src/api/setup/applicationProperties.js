// Properties used by the Application that can be modified by setting envs

var ApplicationProperties = {
  port: process.env.PORT || 8000,
  dbName: process.env.DB_NAME || 'core',
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASS || null,
  testHost: process.env.TEST_HOST || '127.0.0.1',
  testPort: process.env.TEST_PORT || '8000',
}

module.exports = ApplicationProperties;
