/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('vehicle', function (table) {
      table.increments('id').primary()
      table.uuid('visitor_id').notNullable().unique()
      table.foreign('visitor_id').references('visitor.visitor_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('maker', 32)
      table.string('name', 32)
      table.string('color', 32)
      table.string('model', 32)
      table.string('license_plate', 10)
      table.string('license_plate_country', 5)
      table.string('year_of_manufactory', 4)
      table.date('last_parking_session_date')
      table.timestamp('creation_date')
      table.timestamp('update_date')
      table.timestamp('deletion_date')
    })
    .createTable('credit_card', function (table) {
      table.increments('id').primary()
      table.uuid('visitor_id').notNullable().unique()
      table.foreign('visitor_id').references('visitor.visitor_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('year', 4)
      table.string('month', 2)
      table.string('card_type', 10)
      table.string('good_thru', 7)
      table.string('first_name', 30)
      table.string('fingure_print', 30)
      table.string('postal_code', 10)
      table.string('service_type', 10)
      table.string('first_six_digits', 6)
      table.string('last_four_digits', 4)
      table.string('payment_method_token', 255)
      table.date('last_used_date_for_food')
      table.timestamp('creation_date')
      table.timestamp('update_date')
      table.timestamp('deletion_date')
    })
    .createTable('device', function (table) {
      table.increments('id').primary()
      table.uuid('visitor_id').notNullable().unique()
      table.foreign('visitor_id').references('visitor.visitor_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('maker', 32)
      table.string('model', 32)
      table.string('os_version', 16)
      table.string('token', 64)
      table.string('locale', 5)
      table.string('platform', 8)
      table.string('timezone', 4)
      table.string('mobile_carrier', 20)
      table.string('notification_token', 255)
      table.timestamp('creation_date')
      table.timestamp('update_date')
    })
    .createTable('app', function (table) {
      table.increments('id').primary()
      table.integer('device_id').notNullable()
      table.foreign('device_id').references('device.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('notification_badge', 32)
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
    .dropTable('app')
    .dropTable('device')
    .dropTable('credit_card')
    .dropTable('vehicle')
}
