var data;
var baseUrl = 'https://api.spotify.com/v1/search?q='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {};

  $scope.getSongs = function() {
    $http.get(baseUrl + $scope.input + "&type=artist").success(function(response){
      data = $scope.artists = response.artists.items
    })
  }
})