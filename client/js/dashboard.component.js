app.component('dashboard', {
  templateUrl: './js/dashboard.template.html',
  controller: dashboardController,
  params: {
    username: '>'
  }
})

dashboardController.$inject = ['$state', '$rootScope'];

function dashboardController ($state, $rootScope) {

  this.$onInit = function (){
    $rootScope.username = localStorage.username;
  }

}
