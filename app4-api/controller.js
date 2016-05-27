angular.module('app')
  .controller('mainCtrl', function($scope, mainService) {

    $scope.starWars = function() {
      mainService.getApi($scope.starWarsCool).then(function(response) {
        $scope.starWarsType = response;
      })
    }

  })
