(function () {
	'use strict';
	angular
		.module('app.core')
		.factory('dataservice', dataservice);
		
		
	function dataservice($http, $location, $q) {
		var primePromise;
		var isPrimed = false;
		var avengers = [
                {name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man'},
                {name: 'Chris Hemsworth', character: 'Thor'},
                {name: 'Chris Evans', character: 'Steve Rogers / Captain America'},
                {name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk'},
                {name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow'},
                {name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye'},
                {name: 'Gwyneth Paltrow', character: 'Pepper Potts'},
                {name: 'Samuel L. Jackson', character: 'Nick Fury'},
                {name: 'Paul Bettany', character: 'Jarvis'},
                {name: 'Tom Hiddleston', character: 'Loki'},
                {name: 'Clark Gregg', character: 'Agent Phil Coulson'}
            ];
			
		var service = {
			getAvengers : getAvengers
		};
		
		return service;
		
		
		
		function getAvengers() {
			return avengers;
		}
		
		
		function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
            }
        }

		function ready(nextPromises) {
			var readyPromise = primePromise || prime();
			
			return readyPromise.then(function() {
				return $q.all(nextPromises);
			});
		}
	}
})();