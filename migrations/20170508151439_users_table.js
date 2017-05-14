exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
  table.increments('id').primary().unique();
  table.string('username').notNullable().unique();
  table.string('password').notNullable();
  table.string('email').notNullable();
  table.boolean('is_admin');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
