(function(module) {
	
	module.factory('PortfolioService', ['$timeout', function($timeout) {

		var portfoliosModel = {
			portfolios: {};
		};
		
		$timeout(function() {

			portfoliosModel.portfolios = {
				exhibitions: [
				{
					portfolio: 'naturalSelection'
					portfolioName: 'NATURAL SELECTION',
					portfolioImage: 'ShowsPromiseWindo-Exhibit-300x200.jpg',
					images: [
						{ imageCaption: 'Close Up', imageSmall:'CloseUp-copy-162x162.jpg', imageLarge:'CloseUp-copy-501x500.jpg' },
						{ imageCaption: 'Garden Gourd', imageSmall:'Garden-Gourd-copy-162x162.jpg', imageLarge:'Garden-Gourd-copy-750x500.jpg' },
						{ imageCaption: 'Mock Jungle', imageSmall:'Mock-Jungle-copy-162x162.jpg', imageLarge:'Mock-Jungle-copy-333x500.jpg' },
						{ imageCaption: 'Sex in the Garden', imageSmall:'Sex-in-the-Garden-copy-162x162.jpg', imageLarge:'Sex-in-the-Garden-copy-750x500.jpg' },
						{ imageCaption: 'Yummy Pink Garden', imageSmall:'yummy-pink-garden-copy-162x162.jpg', imageLarge:'yummy-pink-garden-copy-500x500.jpg' }
					]
				},
				{
					images: [
						{ image:'one.jpg' },
						{ image:'two.jpg' },
						{ image:'three.jpg' },
						{ image:'four.jpg' },
						{ image:'five.jpg' }
					]
				},
				{
					images: [
						{ image:'one.jpg' },
						{ image:'two.jpg' },
						{ image:'three.jpg' },
						{ image:'four.jpg' },
						{ image:'five.jpg' }
					]
				}],
				'working-with-clay': {
					images: [
						{ image:'one.jpg' },
						{ image:'one.jpg' },
						{ image:'one.jpg' },
						{ image:'one.jpg' },
						{ image:'one.jpg' }
					]
				},
				other: {
					images: [
						{ image:'one.jpg' },
						{ image:'one.jpg' },
						{ image:'one.jpg' },
						{ image:'one.jpg' },
						{ image:'one.jpg' }
					]
				},
			};
		
		}, 4000);
		
		return portfoliosModel;

	}]);

}(angular.module('app')));