// MAIN CONTROLLER DISH
function dishController($scope, $http, dishService) {
	$scope.title = "Liste de plats";

	function load() {
		dishService.get().then(function (res) {
			$scope.dishs = res.data;
		});
	}
	$scope.add = function () {
		var data = {};
		data.meal = $scope.meal;
		data.ingredients = $scope.ingredients;

		data.image = $scope.imageFile;
		dishService.create(data).then(function (res) {
			load();
		});
		$scope.meal = "";
		$scope.ingredients = "";

		$scope.imageFile = "";
		location.reload();
	}
	$scope.update = function (dish) {
		dishService.update(dish._id, dish).then(function (res) {
			load();
		});
	}

	$scope.delete = function (dish) {
		dishService.delete(dish._id).then(function (res) {
			load();
		});
	}

	$scope.previewFile = function () {
		var preview = document.querySelector('#preview');
		var file = document.querySelector('input[type=file]').files[0];
		var reader = new FileReader();
		reader.onloadend = function () {
			preview.src = reader.result;
			$scope.imageFile = reader.result;
		}
		if (file) {
			reader.readAsDataURL(file);
		} else {
			preview.src = "";
		}
	}

	load();
}
