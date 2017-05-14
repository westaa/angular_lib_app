app.component('register', {
  controller: registerController,
  templateUrl: './js/register.template.html',
  bindings: {
    username: '@',
    password: '@',
    email: '@',
    error: '<'
  }
})

registerController.$inject =  ['$state', 'apiService'];

function registerController ($state, apiService) {

  var $ctrl = this;

  $ctrl.register = function () {
    apiService.register($ctrl.username, $ctrl.password, $ctrl.email).then(function(res) {
      if (res.data.name === 'error') {
        $ctrl.error = 'username already exists, please choose another';
        $state.go('app.register');
        return;
      }
      localStorage.username = res.data.username;
      $state.go('app.dashboard');
    })
  }

  $ctrl.$onInit = function () {

  }

}
