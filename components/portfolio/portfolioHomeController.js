(function(module) {
	
	module.controller('PortfolioHomeController', ['$stateParams', 'PortfolioService', '$state', function($stateParams, portfolioService, $state) {
		var phc = {
			portfolioName: $stateParams.portfolio,
			portfolioTemplate: 'components/portfolio/templates/' + $stateParams.portfolio + '.html'
		};

		return phc;
	}]);

}(angular.module('app')));