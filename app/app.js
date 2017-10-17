var moviesModule = angular.module('moviesModule', []);

moviesModule.controller('MoviesController', ['$scope', '$http', function($scope, $http){

  $http.get('content/data/movies.json').then(function(response){
    $scope.movies = response.data;
  });

}]);
