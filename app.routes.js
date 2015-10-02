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
				controller: 'PortfolioListController',
				controllerAs: 'portfolioList',
				templateUrl: 'components/portfolio/portfolioListView.html'
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