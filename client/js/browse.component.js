app.component('browse', {
    templateUrl: '/js/browse.template.html',
    controller: controller,
    bindings: {
      dismiss: '='
    }
  })

controller.$inject = ['$http', 'apiService', '$stateParams', '$uibModal'];
function controller($http, apiService, $stateParams, $uibModal, $modalInstance) {

  const vm = this;

  vm.$onInit = onInit;
  function onInit() {

    vm.books = [];
    return apiService.allBooks().then(function(data) {
      for (var i = 0; i < data.data.length; i++) {
      vm.books.push(data.data[i])
      }
    })

  };


  vm.openComponentModal = function (book) {

    var modalInstance = $uibModal.open({
      backdrop: true,
      animation: vm.animationsEnabled,
      component: 'bookDetailModal',
      resolve: {
        selectedBook: book
      }
    });
  }


};
