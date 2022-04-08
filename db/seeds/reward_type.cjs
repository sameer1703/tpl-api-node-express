/**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reward_type').del()
  await knex('reward_type').insert([
    { id: 1, name: 'bank' },
    { id: 2, name: 'ticket_restaurant' },
    { id: 3, name: 'scan' }
  ])
}
