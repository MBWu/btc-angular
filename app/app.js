angular.module('app').config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    // Set up routes
    $routeProvider.when('/', {templateUrl: 'templates/index.html'});
    $routeProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
])
.run([
  '$rootScope',
  function($rootScope) {
    $rootScope.title = 'Aang Brunch';
  }
]);
