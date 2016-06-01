angular.module('routeApp')
  .controller('signupCtrl', function($scope, $state) {

    $scope.goDetails = function() {
      $state.go('details')
    }

  })
