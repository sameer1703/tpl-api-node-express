/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('uid', function (table) {
      table.increments('uid').primary()
      table.string('username', 32).notNullable().unique()
      table.string('email', 30).notNullable().unique()
    })
    .createTable('visitor', function (table) {
      table.uuid('visitor_id').primary()
      table.integer('uid').unique()
      table.foreign('uid').references('uid.uid').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('acquisition_center_id', 32)
      table.boolean('is_westfield')
      table.timestamp('creation_date')
      table.timestamp('update_date')
      table.timestamp('last_visit_date')
      table.boolean('has_valid_email')
      table.string('barcode', 128)
      table.string('old_card_number', 30)
      table.boolean('is_digital_card')
      table.boolean('is_printed_card')
      table.string('account_type', 10)
    })
    .createTable('pii', function (table) {
      table.increments('pii_id').primary()
      table.uuid('visitor_id').notNullable().unique()
      table.foreign('visitor_id').references('visitor.visitor_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('last_name', 30)
      table.string('first_name', 30)
      table.string('gender', 10)
      table.string('email', 30)
      table.string('phone', 15)
      table.string('salutation', 5)
      table.date('birth_day')
      table.string('origin', 30)
      table.string('address_zip_code', 12)
      table.string('address_city', 30)
      table.string('address_street', 50)
      table.string('timezone', 3)
      table.string('country_code', '5')
      table.string('company_name', 50)
      table.boolean('has_other_company')
    })
    .createTable('external_id_type', function (table) {
      table.increments('id').primary()
      table.string('name', 10).notNullable().unique()
    })
    .createTable('external_id', function (table) {
      table.string('external_id', 32).primary()
      table.uuid('visitor_id').notNullable()
      table.foreign('visitor_id').references('visitor.visitor_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('external_id_type', 10)
      table.foreign('external_id_type').references('external_id_type.name').onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('authentication', function (table) {
      table.increments('id').primary()
      table.uuid('visitor_id').notNullable()
      table.foreign('visitor_id').references('visitor.visitor_id').onUpdate('CASCADE')
      table.string('created_by', 32)
      table.string('created_from', 32)
      table.string('role', 32)
      table.string('api_gateway_key', 128)
      table.string('api_gateway_authorization', 255)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('external_id')
    .dropTable('external_id_type')
    .dropTable('pii')
    .dropTable('authentication')
    .dropTable('visitor')
    .dropTable('uid')
}
