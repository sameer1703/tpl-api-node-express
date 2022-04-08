/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('external_id_type').del()
  await knex('external_id_type').insert([
    { id: 1, name: 'designa' },
    { id: 2, name: 'facebook' },
    { id: 3, name: 'google' },
    { id: 4, name: 'cognito' },
    { id: 5, name: 'gygia' },
    { id: 6, name: 'pas' },
    { id: 7, name: 'wifi' },
    { id: 8, name: 'partner' }
  ])
}
