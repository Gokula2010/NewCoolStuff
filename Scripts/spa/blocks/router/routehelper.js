(function() {
	'use strict';
	
    angular
        .module('blocks.router')
        .provider('routehelperConfig', routehelperConfig)
        .factory('routehelper', routehelper);

    routehelper.$inject = ['$location', '$rootScope', '$route', 'routehelperConfig'];
		
    function routehelperConfig() {
        this.config = {
			$routeProvider : undefined,
			docTitle: '',
			resolveAlways: {ready: function() { } }
        };	

        this.$get = function() {
            return {
                config: this.config
            };
        };
    }

		
	function routehelper($location, $rootScope, $route, routehelperConfig) {
		var $routeProvider = routehelperConfig.config.$routeProvider;
		var routes = [];
		var service = {
			configureRoutes: configureRoutes,
			getRoutes: getRoutes
		};
		
		return service;


		function configureRoutes(routes) {
			routes.forEach(function(route) {
				route.config.resolve = angular.extend(route.config.resolve || {}, routehelperConfig.config.resolveAlways);
				$routeProvider.when(route.url, route.config);
			});
			$routeProvider.otherwise({redirectTo : '/'});
		}
		
		function getRoutes() {
			console.log($route.routes);
			// for(var prop in $route.routes) {
			// 	if($route.routes.hasOwnProperty(prop)) {
			// 		var route = $route.routes[prop];
			// 		
			// 		var isRoute = !!route.title;
			// 		
			// 		if(isRoute) {
			// 			routes.push(route);
			// 		}
			// 		
			// 	}
			// }
			routes.push({
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'Dashboard',
                    controllerAs: 'vm',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
			});
			
			routes.push({
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'Dashboard',
                    controllerAs: 'vm',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
			});
			return routes;
		}
		
	}
		
		
	
})();