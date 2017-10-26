module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'gifted',
      host: 'https://gifted-q3-project.herokuapp.com/'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
