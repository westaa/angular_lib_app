var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider

  .state({
    name: 'app',
    transclude: true,
    component: 'app',
  })

  .state({
    name: 'app.home',
    url: '/',
    component: 'home',
  })

  .state({
    name: 'app.browse',
    url: '/browse',
    component: 'browse',
  })

  .state({
    name: 'app.login',
    url: '/login',
    component: 'login',
  })

  .state({
    name: 'app.register',
    url: '/register',
    component: 'register',
  })

  .state({
    name: 'app.dashboard',
    url: '/dashboard',
    component: 'dashboard',
  })

  .state({
    name: 'app.dashboard.mybooks',
    url: '/mybooks',
    component: 'mybooks',
  })

  .state({
    name: 'app.dashboard.addBook',
    url: '/addBook',
    component: 'addBook',
  })

  .state({
    name: 'app.dashboard.edit',
    url: '/editBook/?id',
    component: 'editBook'
  })
  // console.log($rootScope);
});

app.run(function(apiService, $state) {
  if (!localStorage.jwt || !apiService.isAuthorized(localStorage.jwt)){
     $state.go('app.home');
  }
  return;
})
