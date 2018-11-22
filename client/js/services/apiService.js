app.factory('apiService',

function($location, $http, $state) {

  return {

    allBooks: function () {
      return $http.get('/api/all');
    },

    login: function (username, password) {
      var user = {};
      user.username = username;
      user.password = password;
      return $http.post('/api/login', user).then(function(data){
        return data.data;
      });
    },

    register: function (username, password, email) {
      var user = {};
      user.username = username;
      user.password = password;
      user.email = email;
      return $http.post('/api/register', user);
    },

    isAuthorized: function (token) {
      reqBody = {};
      reqBody.jwt = token;
      return $http.post('/api/auth', reqBody);
    },

    editBook: function (id) {
      return $http.get('api/editBook/' + id)
    },

    submitEditedBook: function (book) {
      return $http.post('api/editBook', book)
    },

    addBook: function (book) {
      return $http.post('api/addBook', book);
    },

    myBooks: function () {
     return $http.get('api/myBooks');
    },

    deleteBook: function (bookId) {
      return $http.delete('api/deleteBook/' + bookId).then(function(data) {
        return data;
      })
    }
  }

});
