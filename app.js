// MODULE

var toDoApp = angular.module("toDoApp", []);

// CONTROLLERS

toDoApp.controller("taskController", ["$scope", function($scope) {

  $scope.task = "";

  $scope.tasks = [];

  $scope.addTask = function() {
    if ($scope.task.length > 0) {
      $scope.tasks.push($scope.task);
    }
    $scope.task = "";
  };

  $scope.removeTask = function(index) {
    $scope.tasks.splice(index, 1);
  };

  $scope.removeAll = function() { 
    $scope.restoreTasks = $scope.tasks.splice(0, $scope.tasks.length);
  };

  $scope.restoreAll = function() {
    if ($scope.tasks.length === 0) {
      $scope.tasks = $scope.restoreTasks;
    }
  };
  
}]);