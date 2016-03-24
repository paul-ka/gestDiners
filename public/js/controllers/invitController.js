// MAIN CONTROLLER DISH
function invitController($scope, $http, invitService, guestService, dishService) {
	$scope.title = "Historique des invitations";
	
	function load(){
		invitService.get().then(function(res){
			$scope.invits = res.data;
		});
		guestService.get().then(function(res){
			$scope.guests = res.data;
		});
		dishService.get().then(function(res){
			$scope.dishs = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.inputInvite = $scope.inputInvite;
		data.inputDate = $scope.inputDate;
		data.inputEntree = $scope.inputEntree;
		data.inputPlat = $scope.inputPlat;
		data.inputDessert = $scope.inputDessert;

		invitService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(invit){
		invitService.update(invit._id, invit).then(function(res){
			load();
		});
	}
	$scope.delete = function(invit){
		invitService.delete(invit._id).then(function(res){
			load();
		});
	}
	load();
}
