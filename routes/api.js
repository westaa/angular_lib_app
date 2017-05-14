require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var cookieSession = require('cookie-session');

router.get('/all', function (req, res, next) {
  knex('books').then(function(data) {
    res.send(data);
  });
});

router.post('/login', function (req, res, next) {
  knex('users')
  .where({
    username: req.body.username
  })
  .first()
  .then(function(data) {
    if(!data) {
      res.json({errors: 'username or password is incorrect'})
    }
    else if(bcrypt.compareSync(req.body.password, data.password)) {
      token = jwt.sign({ id: data.id, username: data.username, is_admin: data.is_admin }, process.env.SECRET);
      req.session.id = data.id;
      req.session.username = data.username;
      req.session.isAdmin = data.is_admin;
      res.json({token: token, username: data.username});
    } else{
      res.json({errors: 'username or password is incorrect'});
    }
  }).catch(function(err) {
    next(err)
  })
});

router.post('/register', function (req, res, next) {
  bcrypt.hash(req.body.password, 8, function(err, hash) {
  knex('users').returning(['username', 'id', 'is_admin']).insert({username: req.body.username, email: req.body.email, password:hash, is_admin:false}).then(function(data) {
    req.session.id = data[0].id;
    req.session.username = data[0].username;
    req.session.isAdmin = data[0].isadmin;
    res.json(data[0])
  }, function(error) {
    console.log(error);
    res.json(error)
  })
  })
});

router.post('/addBook', function(req, res, next) {
  knex('books').returning('id')
  .insert(req.body).then(function(data){
    knex('books_users').returning('id').insert({user_id: req.session.id, book_id: data[0]}).then(function(data) {
      res.json(data)
    });
  })
});

router.get('/editBook/:id', function (req, res, next) {
  knex('books').where({id: req.params.id}).then(function(data) {
    res.json(data);
  })
})

router.post('/editBook', function (req, res, next) {
  knex('books').where('id', req.body.id).update(req.body).then(function(data){
    console.log(data);
  })
});

router.get('/myBooks', function (req, res, next) {
  knex('books_users').where({user_id: req.session.id}).fullOuterJoin('books', 'books.id', 'books_users.book_id').fullOuterJoin('users', 'users.id', 'books_users.user_id').then(function(data){
    res.json(data);
  });
});

router.delete('/deleteBook/:bookId', function (req, res, next) {
  return knex('books').where({id: req.params.bookId}).del().then(function() {
    knex('books_users').where({book_id: req.params.bookId, user_id: req.session.id}).returning('*').del().then(function(data){
      res.json(data)
    })
  });
});

module.exports = router;
