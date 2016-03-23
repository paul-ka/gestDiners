function partyController($scope, $http, partyService, dishService, guestService) {
	$scope.title = "Un Diner Plus Que Parfait"

	function load() {
		partyService.get().then(function (res) {
			$scope.partys = res.data;
		});
		dishService.get().then(function (res) {
			$scope.dishs = res.data;
			$scope.dishs.forEach(function(dish){
				dish.trusty =true;
			});
		});
		guestService.get().then(function (res) {
			$scope.guests = res.data;
		});

	}

	$scope.clickselect = function (guest) {
		for (var i = 0; i < $scope.dishs.length; i++){
			$scope.dishs[i].trusty = true;
			for (var j = 0; j < $scope.guests.length; j++){
				if (($scope.dishs[i].ingredients.toLowerCase().indexOf($scope.guests[j].allergy.toLowerCase()) > -1) 
					&& ($scope.guests[j].allergy.length > 0)
					&& ($scope.guests[j].select == true)){
					$scope.dishs[i].trusty = false;}
				if (($scope.dishs[i].ingredients.toLowerCase().indexOf($scope.guests[j].hated.toLowerCase()) > -1) 
					&& ($scope.guests[j].hated.length > 0)
					&& ($scope.guests[j].select == true)){
					$scope.dishs[i].trusty = false;}
			}
		}
	}
/*version Jerome
	$scope.clickselect = function (guest) {
		var filter = [];
		for (var i = 0; i < $scope.dishs.length; i++){
			if ($scope.dishs[i].ingredients.indexOf(guest.allergy) == -1 &&	
				$scope.dishs[i].ingredients.indexOf(guest.hated) == -1)
				filter.push($scope.dishs[i]);
		}

		$scope.dishs = filter;
	}
*/

	load();
}