(function() {
	'use strict';
	
    angular
        .module('myapp.layout')
        .controller('Sidebar', Sidebar);
	
	Sidebar.$inject = ['$route', 'routehelper'];
	
	function Sidebar($route, routehelper) {
		var vm = this;
		var routes = routehelper.getRoutes();
		vm.isCurrent = isCurrent;
		activate();
		
		
		function activate() {
			getNavRoutes();
		}
		
        function getNavRoutes() {
            vm.navRoutes = routes.filter(function(r) {
                return r.config.settings && r.config.settings.nav;
            }).sort(function(r1, r2) {
                return r1.config.settings.nav - r2.config.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$route.current || !$route.current.title) {
                return '';
            }
            var menuName = route.title;
            return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
	}
	
})();