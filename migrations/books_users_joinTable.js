exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_users', function(table) {
  table.increments('id').primary().unique();
  table.integer('user_id').notNullable();
  table.integer('book_id').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_users');
};
