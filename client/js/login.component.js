app.component('login', {
  templateUrl: './js/login.template.html',
  controller: loginController,
  bindings: {
    username: '@',
    password: '@',
  }
})

loginController.$inject = ['$http', 'apiService', '$stateParams', '$uibModal', '$state', '$rootScope'];

function loginController ($http, apiService, $stateParams, $uibModal, $state, $rootScope) {

    var $ctrl = this;
    $ctrl.errors = [];
    $ctrl.login = function () {
    apiService.login(this.username, this.password).then(function(res) {
      if (res.errors) {
        $ctrl.error = res.errors;
      } else if (res.token) {
        localStorage.jwt = res.token;
        $rootScope.jwt = localStorage.jwt;
        localStorage.username = res.username;
        $state.go('app.dashboard', {username: res.username} );
      }
    });
  };

  $ctrl.$onInit = function () {
  }

}
