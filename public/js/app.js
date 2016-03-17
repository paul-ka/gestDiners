function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
	.when('/guest', {
			templateUrl: 'views/guest.html',
			controller: 'guestController'
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
    .controller('mainController', mainController)
		.controller('guestController', guestController)
    .service('todoService', todoService)
		.service('guestService', guestService)
    /*.factory('', )*/
    .run(run);

