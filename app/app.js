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

  $scope.random = Math.floor(Math.random()*10);

  $scope.addMovie = function(){
    $scope.movies.push({
      title: $scope.newmovie.title,
      genre: $scope.newmovie.genre,
      year: $scope.newmovie.year,
      rate: $scope.newmovie.rate,
      poster: $scope.newmovie.poster
    })
  };

  $http.get('content/data/movies.json').then(function(response){
    $scope.movies = response.data;
  });

}]);
