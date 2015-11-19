(function() {
	'use strict';
	
	angular.module('blocks.router')
		.provider('routehelperConfig', routehelperConfig)
		.factory('routeHelper', routeHelper);
		
		routeHelper.$inject = ['$location', '$rootScope', '$route', 'routehelperConfig'];
		
		function routehelperConfig() {
			this.config = {
			
			};
			
			this.$get = function() {
				return {
					config : this.config
				}
			}
		}
		
		function routeHelper($location, $rootScope, $route) {
			
		}
	
})();