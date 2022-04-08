import { Model, snakeCaseMappers } from 'objection'
import Knex from 'knex'

import { writeConfig, readOnlyConfig } from '../../knexfile.js'

const knexWrite = Knex(writeConfig)
const knexReadOnly = Knex(readOnlyConfig)
class ExampleUser extends Model {
  static get tableName () {
    return 'user'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      properties: {
        name: { type: 'string', maxLength: 255 },
        email: { type: 'string', maxLength: 255 }
      }
    }
  }

  $beforeInsert () {
    this.created_at = new Date().toISOString()
  }

  $beforeUpdate () {
    this.updated_at = new Date().toISOString()
  }

  static get columnNameMappers () {
    return snakeCaseMappers()
  }
}

export const ExampleUserRW = ExampleUser.bindKnex(knexWrite)
export const ExampleUserRO = ExampleUser.bindKnex(knexReadOnly)

export default ExampleUserRO
