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

  $scope.moveTaskUp = function(index) {
    if (typeof $scope.tasks[index - 1] !== "undefined") {
      var temp = $scope.tasks[index]
      $scope.tasks[index] = $scope.tasks[index - 1]
      $scope.tasks[index - 1] = temp;
    }
  }
  
  $scope.moveTaskDown = function(index) {
    if (typeof $scope.tasks[index + 1] !== "undefined") {
      var temp = $scope.tasks[index]
      $scope.tasks[index] = $scope.tasks[index + 1]
      $scope.tasks[index + 1] = temp;
    }
  }

}]);