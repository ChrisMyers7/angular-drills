angular.module('app')
  .controller('mainCtrl', function($scope, mainService) {

    $scope.something = 'something';

    $scope.theData = function() {
      mainService.getApi().then(function(dataFromService) {
        $scope.pokis = dataFromService;
      })
    }

    $scope.theData();

    })
