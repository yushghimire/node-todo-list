exports.up = function(knex) {
  return knex.schema.createTable('session', table => {
    table.increments();
    table.text('refresh_token').notNull();
    table.integer('user_id').notNull();
    table.string('email').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('session');
};
