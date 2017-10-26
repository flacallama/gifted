module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'gifted',
      host: 'https://gifted-q3-project.herokuapp.com/'
      // host: '127.0.0.1'
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
