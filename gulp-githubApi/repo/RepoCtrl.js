var app = angular.module('githubViewer');
var RepoCtrl = function($scope, github, $routeParams) {
  'use strict';
  
  var onRepo = function(data) {
    $scope.repo = data;
  };
  var onError = function(reason) {
    $scope.error = reason;
  };
  var reponame = $routeParams.reponame;
  var username = $routeParams.username;
  github.getRepoDetails(username, reponame)
    .then(onRepo, onError);

};
app.controller('RepoCtrl', RepoCtrl);