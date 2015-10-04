(function(module) {
	
	module.controller('PortfolioHomeController', ['$stateParams', 'PortfolioService', '$state', function($stateParams, portfolioService, $state) {

		var phc = {
			currentPortfolio: portfolioService.currentPortfolio,
			portfolioName: $stateParams.portfolio,
			portfolioTemplate: 'components/portfolio/templates/' + $stateParams.portfolio + '.html'
		};

		return phc;
	}]);

}(angular.module('app')));