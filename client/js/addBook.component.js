app.component('addBook', {
  templateUrl: './js/addBook.template.html',
  controller: addBookController,
  bindings: {
    title: '@',
    author: '@',
    year: '@',
    genre: '@',
    image_url: '@',
    description: '@',
  }
});

addBookController.$inject = ['$state', 'apiService', '$window', '$location'];

function addBookController ($state, apiService, $window, $location) {

  this.addBook = function () {
    var book = {};
    book.title = this.title;
    book.author = this.author;
    book.genre = this.genre;
    book.year = this.year;
    book.description = this.description;
    book.image_url = this.image_url;
    apiService.addBook(book).then(function(data) {
      $state.go('app.dashboard.mybooks', {}, {reload: true});
    }, function (error) {
      console.log(error);
    })
  }

  this.$onInit = function () {

  }

  this.$onDestroy = function () {

  }

}
