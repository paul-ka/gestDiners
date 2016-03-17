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
		.otherwise({
			redirectTo: '/'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('dishController', dishController)
    .controller('guestController', guestController)
    .controller('invitController', invitController)
    .service('dishService', dishService)
    .service('guestService', guestService)
    .service('invitService', invitService)
    /*.factory('', )*/
    .run(run);

