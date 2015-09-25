(function(module) {
	
	module.controller('PortfolioListController', ['$stateParams', 'PortfolioService', function($stateParams, portfolioService) {
		return {
			portfolioListName: $stateParams.portfolioListName,
			items: portfolioService.portfolios[$stateParams.portfolioListName]
		}
	}]);

}(angular.module('app')));