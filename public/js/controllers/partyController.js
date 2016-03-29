function partyController($scope, $http, partyService, dishService, guestService, invitService) {
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
		invitService.get().then(function (res) {
			$scope.invits = res.data;
		});

	}
	$scope.clickselect = function (guest) {
		for (var i = 0; i < $scope.dishs.length; i++){
			$scope.dishs[i].trusty = true;
			for (var j = 0; j < $scope.guests.length; j++){

				if ($scope.guests[j].select == true){

					if ($scope.guests[j].allergy.length > 0){
						allergies=$scope.guests[j].allergy.toLowerCase().split(' ');
						for (var k = 0; k < allergies.length; k++){
							if ($scope.dishs[i].ingredients.toLowerCase().indexOf(allergies[k]) > -1){
							$scope.dishs[i].trusty = false;}
						}
					}
					if ($scope.guests[j].hated.length > 0){
						hateds=$scope.guests[j].hated.toLowerCase().split(' ');
						for (var k = 0; k < hateds.length; k++){
							if ($scope.dishs[i].ingredients.toLowerCase().indexOf(hateds[k]) > -1){
							$scope.dishs[i].trusty = false;}
						}
					}
	
					for (var k = 0; k < $scope.invits.length; k++){

						if (($scope.guests[j].name.length == $scope.invits[k].inputInvite.length)
							&& ($scope.dishs[i].meal.toLowerCase().indexOf($scope.invits[k].inputEntree.toLowerCase()) > -1) 
							&& ($scope.invits[k].inputEntree.length > 0)){
							$scope.dishs[i].trusty = false;}
						if (($scope.guests[j].name.length == $scope.invits[k].inputInvite.length)
							&& ($scope.dishs[i].meal.toLowerCase().indexOf($scope.invits[k].inputPlat.toLowerCase()) > -1) 
							&& ($scope.invits[k].inputPlat.length > 0)){
							$scope.dishs[i].trusty = false;}
						if (($scope.guests[j].name.length == $scope.invits[k].inputInvite.length)
							&& ($scope.dishs[i].meal.toLowerCase().indexOf($scope.invits[k].inputDessert.toLowerCase()) > -1) 
							&& ($scope.invits[k].inputDessert.length > 0)){
							$scope.dishs[i].trusty = false;}
						
					}

				}
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