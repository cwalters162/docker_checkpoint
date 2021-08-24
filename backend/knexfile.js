// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: "172.17.0.2",
      port: "5432",
      database: "docker_checkpoint_database",
      user: "postgres",
      password: "docker"
    }
  }
};
