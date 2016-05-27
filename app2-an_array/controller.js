angular.module('arrayApp')
  .controller('arrayController', function($scope, mainService) {

    $scope.getDataFrom = function() {
      $scope.arr = mainService.getData;
    }

    $scope.getDataFrom();

  })
