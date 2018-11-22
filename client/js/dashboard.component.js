app.component('dashboard', {
  templateUrl: './js/dashboard.template.html',
  controller: dashboardController,
  params: {
    username: '>'
  }
})

dashboardController.$inject = ['$state', '$rootScope', 'apiService'];

function dashboardController ($state, $rootScope, apiService) {

  this.$onInit = function (){

    apiService.isAuthorized(localStorage.jwt).then(function(res) {
      console.log("res: ", res.data);
    });

    $rootScope.username = localStorage.username;
  }

}
