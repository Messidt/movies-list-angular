var moviesModule = angular.module('moviesModule', []);

moviesModule.controller('MoviesController', ['$scope', function($scope){

  $scope.movies = [
    {
      title: "The Shawshank Redemption",
      genre: 'drama',
      year: 1994,
      rate: 9.3
    },
    {
      title: "12 Angry Men",
      genre: 'court drama',
      year: 1957,
      rate: 8.6
    },
    {
      title: "Pulp fiction",
      genre: 'gangster',
      year: 1994,
      rate: 8.4
    },
    {
      title: "Seven",
      genre: 'criminal',
      year: 1995,
      rate: 8.3
    },
    {
      title: "Shutter Island",
      genre: 'thriller',
      year: 2010,
      rate: 8.2
    },
    {
      title: "Saving private Ryan",
      genre: 'war',
      year: 1998,
      rate: 8.1
    },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      genre: 'adventure',
      year: 1983,
      rate: 8.1
    },
    {
      title: "Il buono, il brutto, il cattivo",
      genre: 'western',
      year: 1966,
      rate: 8.2
    },
    {
      title: "The departed",
      genre: 'criminal',
      year: 2006,
      rate: 8.0
    },
    {
      title: "Inglourious Basterds",
      genre: 'war',
      year: 2009,
      rate: 8.0
    }
  ];

  console.log(angular.toJson($scope.movies));

}]);
