(function(module) {
	
	module.controller('PortfolioListController', ['$stateParams', 'PortfolioService', function($stateParams, portfolioService) {
		return {
			listName: $stateParams.portfolioListName,
			exhibitionsCount: portfolioService.portfolios.exhibitions.length
		}
	}]);

}(angular.module('app')));