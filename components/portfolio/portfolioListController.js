(function(module) {
	
	module.controller('PortfolioListController', ['$stateParams', function($stateParams) {
		return {
			listName: $stateParams.portfolioListName
		}
	}]);

}(angular.module('app')));