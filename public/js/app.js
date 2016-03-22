function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'invitController'
		})
		.when('/guest', {
			templateUrl: 'views/guest.html',
			controller: 'guestController'
		})
		.when('/dish', {
			templateUrl: 'views/dish.html',
			controller: 'dishController'
		})

		.when('/party', {
			templateUrl: 'views/party.html',
			controller: 'partyController',
			controller: 'mealController'
		})
		.otherwise({
			redirectTo: '/'
		});
}

function run($rootScope, $location) {
	var path = function () {
		return $location.path();
	};
	$rootScope.$watch(path, function (newVal, oldVal) {
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
	.config(config)

	.controller('dishController', dishController)
	.controller('guestController', guestController)
	.controller('invitController', invitController)
	.controller('partyController', partyController)
	.service('dishService', dishService)
	.service('guestService', guestService)
	.service('invitService', invitService)
	.service('partyService', partyService)


/*.factory('', )*/
.run(run);