(function(module) {
	
	module.controller('PortfolioCarouselController', ['$stateParams', 'PortfolioService', '$state', function($stateParams, portfolioService, $state) {
		var o = {
			currentPortfolio: portfolioService.currentPortfolio,
			portfolioName: $stateParams.portfolio,
			portfolioListName: $stateParams.portfolioListName,
			portfolioTemplate: 'components/portfolio/templates/' + $stateParams.portfolio + '.html',
			myInterval: 2000,
			noWrapSlides: false
		};

		return o;
	}]);

}(angular.module('app')));