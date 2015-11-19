(function() {
	var core = angular.module('myapp.core');
	var config = {
		appTitle: 'Angular Modular Demo'
	};
	core.value('config', config);
})();