/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('reward_type', function (table) {
      table.increments('id').primary()
      table.string('name', 20).notNullable().unique()
    })
    .createTable('reward', function (table) {
      table.increments('id').primary()
      table.string('crm_id', 20).notNullable()
      table.foreign('crm_id').references('visitor_center.crm_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('reward_type', 20).notNullable()
      table.foreign('reward_type').references('reward_type.name').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('external_id', 32)
      table.boolean('is_converted')
      table.string('upgraded_from', 32)
      table.timestamp('start_date')
      table.timestamp('end_date')
      table.decimal('balance')
      table.decimal('threshold')
    })
    .createTable('parking', function (table) {
      table.increments('id').primary()
      table.string('crm_id', 20).notNullable()
      table.foreign('crm_id').references('visitor_center.crm_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.boolean('active')
      table.timestamp('subscription_date')
      table.string('session_number', 255)
      table.timestamp('registration_date')
      table.timestamp('first_date_parked')
      table.timestamp('last_date_parked')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('reward')
    .dropTable('reward_type')
    .dropTable('parking')
}
