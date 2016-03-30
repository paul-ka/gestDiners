// MAIN CONTROLLER DISH
function dishController($scope, $http, dishService) {
	$scope.title = "Liste de plats";
    $scope.dish = {};
    
	function load() {
		dishService.get().then(function (res) {
			$scope.dishs = res.data;
		});
	}
	$scope.add = function () {
		$scope.dish.image = $scope.imageStrings[0];
		dishService.create($scope.dish).then(function (res) {
			load();
		});
		$scope.meal = "";
		$scope.ingredients = "";
		$scope.category = "";
		$scope.recipe = "";	
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

	$scope.imageStrings = [];
	// datas.images = [];
	// datas.push($scope.datas);
	$scope.processFiles = function(files){
		angular.forEach(files, function(flowFile, i){
			var fileReader = new FileReader();
			fileReader.onload = function (event) {
				var uri = event.target.result;
				$scope.imageStrings[i] = uri;
				// var image = new Object();
				// image["image"] = $scope.imageStrings[i];
				// datas.images.push(image);
				// console.log(datas);
				// console.log($scope.datas);
			};
			fileReader.readAsDataURL(flowFile.file);
		});
	};

}
