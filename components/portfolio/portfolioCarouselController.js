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

		o.setSlide = function(slideIndex) {
			for (ii in o.currentPortfolio.images) {
				if (ii == slideIndex) {
					o.currentPortfolio.images[ii].active = true;
				} else {
					delete o.currentPortfolio.images[ii].active;
				}
			}
		}

		o.setSlide($stateParams.slideIndex || 0);

		return o;
	}]);

}(angular.module('app')));