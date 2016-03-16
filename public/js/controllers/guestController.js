// MAIN CONTROLLER DISH
function guestController($scope, $http, guestService) {
	$scope.title = "Liste des invités";
	
	function load(){
		guestService.get().then(function(res){
			$scope.guests = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		guestService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(dish){
		guestService.update(guest._id, guest).then(function(res){/////////////
			load();
		});
	}
	$scope.delete = function(dish){
		guestService.delete(guest._id).then(function(res){
			load();
		});
	}
	load();
}
