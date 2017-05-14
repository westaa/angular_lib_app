app.component('app', {
    templateUrl: '/js/app.template.html',
    controller: controller,
});

controller.$inject = ['$http', '$uibModal', '$rootScope', '$state', '$scope'];

function controller($http, $uibModal, $rootScope, $state, $scope) {
  const vm = this

  vm.$onInit = onInit;

  $rootScope.goHome = function ($event) {
    if ($rootScope.modal) return;
    if (!localStorage.jwt) {
      $state.go('app.home');
      return;
    }
    if (localStorage.jwt) {
      if (!jwt_decode(localStorage.jwt).username) {
        $state.go('app.home');
        console.log('hitting if');
        return;
      }
      if (jwt_decode(localStorage.jwt).username === localStorage.username) {
        $state.go('app.dashboard');
        return;
      }
    }
    $state.go('app.home');
  }

  vm.logout = function () {
    localStorage.clear();
    $rootScope.username = null;
    $state.go('app.home');
  }

  function onInit() {
    vm.addingPost = false
  }
}
