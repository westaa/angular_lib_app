var bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({
        username: 'andrew',
        email: 'saints2010@gmail.com',
        password: bcrypt.hashSync('test', 8),
        is_admin: true
    }),
    knex('users').insert({
        username: 'brendan',
        email: 'brendan@gmail.com',
        password: bcrypt.hashSync('test', 8),
        is_admin: true
    }),
    knex('users').insert({
        username: 'user1',
        email: 'user1@email.com',
        password: bcrypt.hashSync('password1', 8),
        is_admin: false
    })
  );
};
