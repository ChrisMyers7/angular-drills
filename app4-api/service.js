angular.module('app')
  .service('mainService', function($http, $q) {

    this.getApi = function(object) {
      var deffered = $q.defer()
      $http({
        method: 'GET',
        url: 'http://swapi.co/api/' + object
      }).then(function(response) {
        var data = response.data.results;
        deffered.resolve(data);
      })
      return deffered.promise;
    }

  })
