import 'dotenv/config'

const config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  pool: {
    min: 1,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    extension: 'cjs',
    loadExtensions: ['.cjs']
  },
  seeds: {
    extension: 'cjs',
    loadExtensions: ['.cjs']
  }
}

export const { client, connection, pool, migrations, seeds } = config

export default config
