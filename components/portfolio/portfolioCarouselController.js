(function(module) {
	
	module.controller('PortfolioCarouselController', ['$stateParams', 'PortfolioService', '$state', function($stateParams, portfolioService, $state) {
		var o = {
			portfolioName: $stateParams.portfolio,
			portfolioTemplate: 'components/portfolio/templates/' + $stateParams.portfolio + '.html'
		};

		return o;
	}]);

}(angular.module('app')));