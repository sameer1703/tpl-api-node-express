/**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('channel_type').del()
  await knex('channel_type').insert([
    { id: 1, name: 'sms' },
    { id: 2, name: 'email' },
    { id: 3, name: 'push' }
  ])
}
