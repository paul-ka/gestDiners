
// GEST CONTROLLER
function guestController($scope, $http, guestService) {
	$scope.title = "Mes Amis";
	$scope.i = 0; 
	$scope.suivant = function(i){	
		$scope.nameMessage='';
		if (($scope.name == undefined) && (i==0)){
			$scope.nameMessage='Ce champ ne peut être vide';
		}
		for (var i = 0; i < $scope.guests.length; i++){
			if ($scope.guests[i].name.toLowerCase() == $scope.name.toLowerCase()){
				$scope.nameMessage='Cet invité existe déjà';
			} 
		}
		if($scope.nameMessage==''){
			$scope.i++;
		}
	}	
	$scope.precedent = function(i) {
		$scope.i--;
	}
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
		$scope.i = 0
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

