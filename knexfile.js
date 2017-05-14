module.exports = {

  development: {
    client: 'postgres',
    connection: 'postgres://localhost:5432/alexandria1'
  },
  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/alexandria1'
  }

};
