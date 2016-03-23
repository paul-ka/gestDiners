function partyController($scope, $http, partyService, dishService, guestService) {
	$scope.title = "Soirée"

	function load(){
		partyService.get().then(function(res){
			$scope.partys = res.data;
		});
		dishService.get().then(function(res){
			$scope.dishs = res.data;
		});
		guestService.get().then(function(res){
			$scope.guests = res.data;
		});

	}
	$scope.clickselect = function (guest, dish) {
		$scope.trusty = [];
		if (guest.select == true){	
			if ($scope.dishs == $scope.guests){
				$scope.trusty = true;
			};
		}
		else {
			$scope.trusty = false;
		};
	}

	load();
}
