import 'dotenv/config'

export const readOnlyConfig = {
  client: 'pg',
  connection: () => ({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST_RO || process.env.DB_HOST,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER
  }),
  pool: {
    min: process.env.DB_POOL_MIN_RO || process.env.DB_POOL_MIN || 1,
    max: process.env.DB_POOL_MAX_RO || process.env.DB_POOL_MAX || 10
  }
}

export const writeConfig = {
  client: 'pg',
  connection: () => ({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER
  }),
  pool: {
    min: process.env.DB_POOL_MIN || 1,
    max: process.env.DB_POOL_MAX || 10
  }
}

export default writeConfig
