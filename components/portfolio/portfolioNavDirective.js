(function(module) {
	
	module.directive('portfolioNav', function() {
		var ddo = {
			templateUrl: 'components/portfolio/portfolioNav.html',
			replace: true
		};

		return ddo;
	});

}(angular.module('app')));