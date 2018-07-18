/**
 * Seed tags table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('tags')
    .del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({
          tag_name: 'person'
        }),
        knex('tags').insert({
          tag_name: 'nature'
        }),
        knex('tags').insert({
          tag_name: 'vehicle'
        }),
        knex('tags').insert({
          tag_name: 'building'
        }),
        knex('tags').insert({
          tag_name: 'food'
        }),
        knex('tags').insert({
          tag_name: 'all'
        }),
        knex('tags').insert({
          tag_name: 'gadgets'
        })
      ]);
    });
}
