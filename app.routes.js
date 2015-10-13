(function(module) {

	module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeController',
				controllerAs: 'home',
				templateUrl: 'components/home/homeView.html'
			})
			.state('portfolio-list', {
				url: '/portfolio-list/:portfolioListName',
				abstract: true,
				template: '<ui-view></ui-view>'
			})
			.state('portfolio-list.list', {
				url: '/',
				controller: 'PortfolioListController',
				controllerAs: 'portfolioList',
				templateUrl: 'components/portfolio/portfolioListView.html'
			})
			.state('portfolio-list.portfolio', {
				abstract: true,
				url: '/:portfolio',
				template: '<ui-view></ui-view>'
			})
			.state('portfolio-list.portfolio.home', {
				url: '/',
				controller: 'PortfolioHomeController',
				controllerAs: 'portfolioHome',
				templateUrl: 'components/portfolio/portfolioHomeView.html'
			})
			.state('portfolio-list.portfolio.grid', {
				url: '/grid',
				controller: 'PortfolioGridController',
				controllerAs: 'portfolioGrid',
				templateUrl: 'components/portfolio/portfolioGridView.html'
			})
			.state('portfolio-list.portfolio.carousel', {
				url: '/carousel/:slideIndex',
				controller: 'PortfolioCarouselController',
				controllerAs: 'portfolioCarousel',
				templateUrl: 'components/portfolio/portfolioCarouselView.html'
			})
			.state('bio-and-resume', {
				url: '/bio-and-resume',
				controller: 'BioAndResumeController',
				controllerAs: 'bioAndResume',
				templateUrl: 'components/bio-and-resume/bioAndResumeView.html'
			})
			.state('carousel-test', {
				url: '/carousel-test',
				controller: 'CarouselTestController',
				controllerAs: 'carouselTest',
				templateUrl: 'components/carousel-test/carouselTestView.html'
			})
			.state('contact', {
				url: '/contact',
				controller: 'ContactController',
				controllerAs: 'contact',
				templateUrl: 'components/contact/contactView.html'
			});

		$urlRouterProvider.otherwise('/');
	}]);

}(angular.module('app')));