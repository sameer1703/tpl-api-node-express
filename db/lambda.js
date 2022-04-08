import Knex from 'knex'
import config from './knexfile.js'

const knex = Knex(config)

export const handler = async (event, context) => {
  try {
    switch (event.type) {
      case 'latest':
        await knex.migrate.latest()
        await knex.seed.run()
        break
      case 'up':
        await knex.migrate.up()
        break
      case 'down':
        await knex.migrate.down()
        break
      case 'rollback':
        await knex.migrate.rollback()
        break
      default:
        throw new Error('Unsupported operation: ' + event.type)
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}
