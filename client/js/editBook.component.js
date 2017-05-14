app.component('editBook', {
  templateUrl: './js/editBook.template.html',
  controller: editBookController,
  bindings: {}
})

editBookController.$inject = ['$state', 'apiService', '$stateParams', '$window'];

function editBookController ($state, apiService, $stateParams, $window) {

  this.editBook = function () {
    var book = this.selectedBook.value.data[0];
    apiService.submitEditedBook(book);
    $state.go('app.dashboard.mybooks', {}, {reload: true});
  }

  this.$onInit = function () {
    this.selectedBook = apiService.editBook($stateParams.id).$$state;
  }

}
