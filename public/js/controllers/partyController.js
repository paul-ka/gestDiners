function partyController($scope, $http, partyService, dishService, guestService) {
	$scope.title = "Soirée"

	function load() {
		partyService.get().then(function (res) {
			$scope.partys = res.data;
		});
		dishService.get().then(function (res) {
			$scope.dishs = res.data;
		});
		guestService.get().then(function (res) {
			$scope.guests = res.data;
		});

	}
	$scope.clickselect = function (guest) {
		$scope.trusty = [];

		/*if ((guest.select == true) && (($scope.dishs.ingredients == $scope.guests.allergy) || ($scope.dishs.ingredients == $scope.guests.hated))) {*/
		if ((guest.select == true) && (($scope.partys.plats == $scope.guests.ingredients))) {
			$scope.trusty = true;
		} else {
			$scope.trusty = false;
		};
	}

	load();
}