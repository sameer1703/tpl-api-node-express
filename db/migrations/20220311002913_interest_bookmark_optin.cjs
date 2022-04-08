/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('interest', function (table) {
      table.increments('id').primary()
      table.string('crm_id', 20).notNullable()
      table.foreign('crm_id').references('visitor_center.crm_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('external_id', 32)
      table.timestamp('creation_date')
      table.timestamp('update_date')
    })
    .createTable('bookmark', function (table) {
      table.increments('id').primary()
      table.string('crm_id', 20).notNullable()
      table.foreign('crm_id').references('visitor_center.crm_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('label', 32)
      table.string('type', 32)
      table.boolean('deleted')
      table.boolean('from_LBE')
      table.timestamp('creation_date')
      table.timestamp('update_date')
    })
    .createTable('channel_type', function (table) {
      table.increments('id').primary()
      table.string('name', 20).notNullable().unique()
    })
    .createTable('optin_type', function (table) {
      table.increments('id').primary()
      table.string('name', 20).notNullable().unique()
    })
    .createTable('optin', function (table) {
      table.increments('id').primary()
      table.string('crm_id', 20).notNullable()
      table.foreign('crm_id').references('visitor_center.crm_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('channel_type', 20).notNullable()
      table.foreign('channel_type').references('channel_type.name').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('optin_type', 20).notNullable()
      table.foreign('optin_type').references('optin_type.name').onDelete('CASCADE').onUpdate('CASCADE')
      table.boolean('active')
      table.date('last_opened_date')
      table.string('additional', 50)
      table.string('wallet', 50)
      table.string('personal_data_processing', 50)
      table.boolean('outside')
      table.timestamp('creation_date')
      table.timestamp('update_date')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('optin')
    .dropTable('optin_type')
    .dropTable('channel_type')
    .dropTable('bookmark')
    .dropTable('interest')
}
