/**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('optin_type').del()
  await knex('optin_type').insert([
    { id: 1, name: 'food' },
    { id: 2, name: 'marketing' },
    { id: 3, name: 'parking' },
    { id: 4, name: 'comercial' },
    { id: 5, name: 'loyalty' },
    { id: 6, name: 'newsletter' }
  ])
}
