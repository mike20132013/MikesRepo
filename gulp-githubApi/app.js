var app = angular.module('githubViewer', [
  'ngRoute'
]);

app.config(function($routeProvider) {
  
  'use strict';
  $routeProvider
  .when('/main', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    })
    .when('/user/:username', {
      templateUrl: 'user.html',
      controller: 'UserCtrl'
    })
    .when('/repo/:username/:reponame', {
      templateUrl: 'repo.html',
      controller: 'RepoCtrl'
    })
    .otherwise({
      redirectTo: '/main'
    });
});