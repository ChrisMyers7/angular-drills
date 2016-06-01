angular.module('routeApp')
  .controller('detailsCtrl', function($scope, $stateParams) {

    $scope.subscriber = $stateParams.userName;
    $scope.content = $stateParams.content;

  })
