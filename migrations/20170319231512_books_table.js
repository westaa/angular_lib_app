exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
  table.increments('id').primary().unique();
  table.string('title').notNullable();
  table.string('author').notNullable();
  table.integer('year').notNullable();
  table.string('genre').notNullable();
  table.string('description', 2000).notNullable();
  table.string('image_url').notNullable();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
