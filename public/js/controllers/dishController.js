// MAIN CONTROLLER DISH
function dishController($scope, $http, dishService) {
	$scope.title = "Liste de plats";
	
	function load(){
		dishService.get().then(function(res){
			$scope.dishs = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.meal = $scope.meal;
		data.ingredients = $scope.ingredients;
		dishService.create(data).then(function(res){
			load();
		});
		$scope.meal = "";
		$scope.ingredients = "";
	}
	$scope.update = function(dish){
		dishService.update(dish._id, dish).then(function(res){
			load();
		});
	}
	$scope.delete = function(dish){
		dishService.delete(dish._id).then(function(res){
			load();
		});
	}
	load();
}
