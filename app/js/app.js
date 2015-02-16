/*global angular, ngRoute*/
var app = angular.module('app', ['ngRoute']);

 
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      }).
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    }).
      when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogController'
      }).
      when('/photography', {
        templateUrl: 'views/photography.html',
        controller: 'PhotographyController'
      }).
      otherwise({
        redirectTo: '/main'
      });
}]);
 
 
app.controller('MainController', function($scope) {
    $scope.message = 'This is Add new main screen';
});
 
app.controller('AboutController', function($scope) {
    $scope.message = 'This is Show about screen';
 
});

app.controller('BlogController', function($scope) {
    $scope.message = 'This is Add new blog screen';
     
});

app.controller('PhotographyController', function($scope) {
    $scope.message = 'This is PhotographyController';
});