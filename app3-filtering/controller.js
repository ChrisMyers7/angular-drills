angular.module('app')
  .controller('mainCtrl', function($scope, mainService) {

    $scope.users = mainService.getData();

    // $scope.filterOptions = {
    //   Name: name;
    //   Email: email;
    //   Phone Num: phone;
    // };

  })
