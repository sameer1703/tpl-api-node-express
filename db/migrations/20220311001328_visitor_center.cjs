/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('center', function (table) {
      table.string('center_id', 50).primary()
      table.string('pc_code', 32).unique().notNullable()
      table.string('country', 5).notNullable().unique()
      table.boolean('is_westfield')
    })
    .createTable('visitor_center', function (table) {
      table.string('crm_id', 20).primary()
      table.uuid('visitor_id').notNullable()
      table.foreign('visitor_id').references('visitor.visitor_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('center_id', 50)
      table.foreign('center_id').references('center.center_id').onDelete('CASCADE').onUpdate('CASCADE')
      table.boolean('is_premium')
      table.boolean('is_vip')
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
    .dropTable('visitor_center')
    .dropTable('center')
}
