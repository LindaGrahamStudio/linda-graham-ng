(function(module) {
	
	module.controller('PortfolioListController', ['$stateParams', 'PortfolioService', '$state', function($stateParams, portfolioService, $state) {
		var plc = {
			portfolioListName: $stateParams.portfolioListName,
			items: portfolioService.portfolios[$stateParams.portfolioListName]
		};

		var svc = portfolioService;

		plc.selectPortfolio = selectPortfolio;

		function selectPortfolio(item) {
			svc.setCurrentPortfolio(item);
			$state.go('portfolio-list.portfolio.home', {
				portfolioListName: plc.portfolioListName,
				portfolio: svc.currentPortfolio.portfolio
			}, {});
		}

		return plc;
	}]);

}(angular.module('app')));