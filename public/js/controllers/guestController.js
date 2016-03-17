// GEST CONTROLLER
function guestController($scope, $http, guestService) {
	$scope.title = "Mes Amis";
	
	function load(){
		guestService.get().then(function(res){
			$scope.guests = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.name = $scope.name;
		data.allergy = $scope.allergy;
		data.hated = $scope.hated;
		guestService.create(data).then(function(res){
			load();
		});
		$scope.name = "";
		$scope.allergy = "";
		$scope.hated = "";
	}
	$scope.update = function(guest){
		guestService.update(guest._id, guest).then(function(res){
			load();
		});
	}
	$scope.delete = function(guest){
		guestService.delete(guest._id).then(function(res){
			load();
		});
	}
	load();
}