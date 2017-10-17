var moviesModule = angular.module('moviesModule', ['ngRoute']);

moviesModule.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'MoviesController'
  })
  .when('/list', {
    templateUrl: 'views/list.html',
    controller: 'MoviesController'
  })
  .otherwise({
    redirectTo: '/home'
  })
}]);


moviesModule.controller('MoviesController', ['$scope', '$http', function($scope, $http){


  $http.get('content/data/movies.json').then(function(response){
    $scope.movies = response.data;
  });

}]);
