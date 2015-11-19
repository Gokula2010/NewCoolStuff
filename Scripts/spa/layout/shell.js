(function() {
	'use strict';
	
	// angular.module('myapp.layout')
	// 	.controller('Shell', Shell);
	// 
	// Shell.$inject = ['$timeout', 'config'];
	// 
	angular
	.module('myapp.layout')
	.controller('Shell', Shell);

    Shell.$inject = ['$timeout', 'config'];
	
	function Shell($timeout, config) {
		
		var vm = this;
		
		vm.title = config.appTitle;
		vm.busyMessage = 'Please wait ...';
		vm.isBusy = true;
		vm.showSplash = true;
		
		active();
		
		
		function active() {
			hideSplash();	
		}
		
		
		function hideSplash() {
			$timeout(function() {
				vm.showSplash = false;
			}, 1000);
		}
		
	}
})();