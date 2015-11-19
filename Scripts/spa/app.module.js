(function() {
	'use strict';
	
	var myapp = angular.module('myapp', ['myapp.core', 'myapp.avangers', 'myapp.layout']);
	
	myapp.controller('MainCtrl', ['$scope', function($scope) {
		$scope.message = 'Welcome To AngularJS';
	}]);
})();