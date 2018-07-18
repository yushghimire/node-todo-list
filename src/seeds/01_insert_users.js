/**
 * Seed users table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('users')
    .del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'ayush',
          last_name: 'ghimire',
          email: 'yushghimire@gmail.com',
          password: 'ayush'
        }),
        knex('users').insert({
          first_name: 'smriti',
          last_name: 'ghimire',
          email: 'smritighimire@gmail.com',
          password: 'ghimire'
        })
      ]);
    });
}
