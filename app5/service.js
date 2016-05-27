angular.module('app')
 .service('mainService', function($http, $q) {

   this.getApi = function(obj) {
     var deffered = $q.defer();
     $http({
       method: 'GET',
       url: "https://www.igdb.com/api/v1/games"
     }).then(function(response) {
       var otherData = response.data;
       deffered.resolve(otherData);
     })
     return deffered.promise;
   }

 })
