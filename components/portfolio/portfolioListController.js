(function(module) {
	
	module.controller('PortfolioListController', ['$stateParams', 'PortfolioService', '$state', function($stateParams, portfolioService, $state) {
		var plc = {
			portfolioListName: $stateParams.portfolioListName,
			items: portfolioService.portfolios[$stateParams.portfolioListName]
		};

		plc.selectPortfolio = selectPortfolio;

		function selectPortfolio(item) {
			plc.selectedItem = item;
			$state.go('portfolio-list.portfolio.home', {
				portfolioListName: plc.portfolioListName,
				portfolio: plc.selectedItem.portfolio
			}, {});
		}

		return plc;
	}]);

}(angular.module('app')));