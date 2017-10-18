var moviesModule = angular.module('moviesModule', ['ngRoute', 'ngAnimate']);

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

    $scope.newmovie.title = '';
    $scope.newmovie.genre = '';
    $scope.newmovie.year = '';
    $scope.newmovie.rate = '';
    $scope.newmovie.poster = '';
  };

  $scope.deleteMovie = function(movie){
    var deletedMovie = $scope.movies.indexOf(movie);
    $scope.movies.splice(deletedMovie, 1);
  }

  $http.get('content/data/movies.json').then(function(response){
    $scope.movies = response.data;
  });

}]);
