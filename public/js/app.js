function config($routeProvider) {
	$routeProvider
		.when('/', {
		templateUrl: 'views/dish.html',
		controller: 'dishController'
	})
		.when('/guest', {
		templateUrl: 'views/guest.html',
		controller: 'guestController'
	})
		.when('/historique', {
		templateUrl: 'views/main.html',
		controller: 'invitController'
	})

		.when('/party', {
		templateUrl: 'views/party.html',
		controller: 'partyController',
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
angular.module('app', ['ngRoute','flow'])
	.config(config)

	.controller('dishController', dishController)
	.controller('guestController', guestController)
	.controller('invitController', invitController)
	.controller('partyController', partyController)
	.service('dishService', dishService)
	.service('guestService', guestService)
	.service('invitService', invitService)
	.service('partyService', partyService)

	/*CHARGEMENT IMAGE*/
	.config(['flowFactoryProvider', function (flowFactoryProvider) {
		flowFactoryProvider.defaults = {
			target: '/upload',
			permanentErrors:[404, 500, 501]
		};
		// You can also set default events:
		flowFactoryProvider.on('catchAll', function (event) {
			console.log('catchAll', arguments);
		});
		// Can be used with different implementations of Flow.js
		// flowFactoryProvider.factory = fustyFlowFactory;
	}])

/*.factory('', )*/
	.run(run);