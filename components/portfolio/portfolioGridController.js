(function(module) {
	
	module.controller('PortfolioGridController', ['$stateParams', 'PortfolioService', '$state', function($stateParams, portfolioService, $state) {
		var phc = {
			currentPortfolio: portfolioService.currentPortfolio,
			portfolioName: $stateParams.portfolio,
			portfolioListName: $stateParams.portfolioListName,
			portfolioTemplate: 'components/portfolio/templates/' + $stateParams.portfolio + '.html',
		};

		return phc;
	}]);

}(angular.module('app')));