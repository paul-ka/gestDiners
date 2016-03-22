function partyController($scope, $http, partyService) {
	$scope.title = "Soirée"

	function load(){
		partyService.get().then(function(res){
			$scope.partys = res.data;
		});
	}

	$scope.clickselect = function(guest) {
		alert(guest.name);
	}
};