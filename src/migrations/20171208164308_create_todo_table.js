/**
 * Create todo table.
 *
 * @param  {object} knex
 * @return {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable('todo', table => {
    table.increments();
    table.string('name').notNull();
    table
      .boolean('done')
      .notNull()
      .defaultTo(false);
    table
      .integer('user_id')
      .unsigned()
      .notNull();
    table
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE');
  });
};

/**
 * Drop todo table.
 *
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('todo');
};
