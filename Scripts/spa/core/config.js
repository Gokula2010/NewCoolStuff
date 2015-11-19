(function() {
	var core = angular.module('myapp.core');
	var config = {
		appTitle: 'Angular Modular Demo'
	};
	core.value('config', config);
	core.config(configure);
	
	function configure($routeProvider, routehelperConfigProvider) {
		
		routehelperConfigProvider.config.$routeProvider = $routeProvider;
		routehelperConfigProvider.config.docTitle = 'NG-Modular: ';
		var resolveAlways = {
			ready : function(dataservice) {
				return dataservice.ready();
			}
		};
		
		routehelperConfigProvider.config.resolveAlways = resolveAlways;
	}
})();
