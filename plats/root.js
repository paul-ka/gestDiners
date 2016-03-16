angular.module("root", [])
	.controller("index", ["$scope", function($scope) {
		$scope.isFirstElementVisible = true;
		$scope.isSecondElementVisible = true;
	}]);