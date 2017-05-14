app.component('mybooks', {
  templateUrl: './js/mybooks.template.html',
  controller: myBooksController,
  bindings: {
    bookId: '=',
    myBooks: '<'
  }
});

myBooksController.$inject = ['$state', '$rootScope', 'apiService', '$window', '$uibModal'];

function myBooksController ($state, $rootScope, apiService, $window, $uibModal) {

  this.delete = function (bookId) {
    apiService.deleteBook(bookId).then(function (data) {
      $state.go('app.dashboard.mybooks', {}, {reload: true});
    }, function (error) {
      $state.go('app.dashboard.mybooks', {}, {reload: true});
    })
  }

  this.edit = function (bookId) {
    $state.go('app.dashboard.edit' + bookId, {}, {reload: true})
  }

  this.openComponentModal = function (book) {
    var modalInstance = $uibModal.open({
      backdrop: true,
      component: 'bookDetailModal',
      resolve: {
        selectedBook: book
      }
    });
  }

  this.$onInit = function () {
    this.myBooks = apiService.myBooks().$$state;
    console.log(this.myBooks);
  };

  this.$onDestroy = function () {
  }

}
