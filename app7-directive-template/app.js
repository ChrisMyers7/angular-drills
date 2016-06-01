angular.module('routeApp', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
          templateUrl: 'home-tmpl.html',
          url: '/',
          controller: 'homeCtrl'
        })
        .state('signup', {
          url: '/signup',
          controller: "signupCtrl",
          templateUrl: 'signup-tmpl.html'
        })
        .state('details', {
          url: '/details/:content/subscribe/:userName',
          controller: 'detailsCtrl',
          templateUrl: 'details-tmpl.html'
        })

  })
