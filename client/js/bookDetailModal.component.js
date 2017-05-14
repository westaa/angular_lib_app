app.component('bookDetailModal', {
  templateUrl: './js/bookDetailModal.template.html',
  controller: modalController,
  bindings: {
    resolve: '<'
  }
});


modalController.$inject = ['$uibModal', '$rootScope'];

function modalController ($uibModal, $rootScope) {

  this.$onInit = function () {
    $rootScope.modal = true;
  }

  this.$onDestroy = function () {
    $rootScope.modal = false;
  }

}
