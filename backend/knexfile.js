const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING

module.exports = {
  development: {
    client: 'pg',
    connection: DB_CONNECTION_STRING,
    acquireConnectionTimeout: 120000
  }
};
