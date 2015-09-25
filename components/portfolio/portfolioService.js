(function(module) {
	
	module.factory('PortfolioService', ['$timeout', function($timeout) {

		var portfoliosModel = {
			portfolios: {};
		};
		
		$timeout(function() {


// electromagnetic transformation video: http://player.vimeo.com/video/73148310

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
					portfolio: 'multiverse3'
					portfolioName: 'MULTIVERSE 3',
					portfolioImage: 'Screen-Shot-2013-08-26-at-10.19.52-AM1-300x200.png',
					images: [
						{ imageCaption: 'Multiverse 3', imageSmall:'Screen-Shot-2013-08-26-at-10.13.54-AM-162x162.png', imageLarge:'Screen-Shot-2013-08-26-at-10.13.54-AM.png' },
						{ videoCaption: 'Multiverse 3', imageSmall:'video-162x162.png', videoLarge:'http://player.vimeo.com/video/73148310' }
					]
				},
				{
					portfolio: 'electromagneticTransformation'
					portfolioName: 'ELECTROMAGNETIC TRANSFORMATION',
					portfolioImage: 'IceCubeGallery-300x200.jpg',
					images: [
						{ videoCaption: 'Multiverse 3', imageSmall:'video-162x162.png', videoLarge:'http://player.vimeo.com/video/73148310' }
						{ imageCaption: 'Illusive Reality', imageSmall:'IllusiveReality2-162x162.jpg', imageLarge:'' },
						{ imageCaption: 'Evolving Multiverses', imageSmall:'Evolving-Multiverses-162x162.jpg', imageLarge:'Evolving-Multiverses-333x500.jpg' },
						{ imageCaption: 'Serenity', imageSmall:'Serenity-162x162.jpg', imageLarge:'Serenity-333x500.jpg' },
						{ imageCaption: 'Reflections Deep Space', imageSmall:'Reflections-Deep-Space-162x162.jpg', imageLarge:'Reflections-Deep-Space-333x500.jpg' },
					]
				}],
				workingWithClay: [
				{
					portfolio: 'earlyWorks'
					portfolioName: 'EARLY WORKS',
					portfolioImage: 'dusk-300x200.jpg',
					images: [
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
						{ imageCaption: '', imageSmall:'', imageLarge:'' },
					]
				},
				{
					portfolio: 'laterWorks'
					portfolioName: '2007-2011',
					portfolioImage: 'yummy-pink-garden1-300x200.jpg',
					images: [
						{ videoCaption: 'Multiverse 3', imageSmall:'video-162x162.png', videoLarge:'http://player.vimeo.com/video/73148310' }
						{ imageCaption: 'Illusive Reality', imageSmall:'IllusiveReality2-162x162.jpg', imageLarge:'' },
						{ imageCaption: 'Evolving Multiverses', imageSmall:'Evolving-Multiverses-162x162.jpg', imageLarge:'Evolving-Multiverses-333x500.jpg' },
						{ imageCaption: 'Serenity', imageSmall:'Serenity-162x162.jpg', imageLarge:'Serenity-333x500.jpg' },
						{ imageCaption: 'Reflections Deep Space', imageSmall:'Reflections-Deep-Space-162x162.jpg', imageLarge:'Reflections-Deep-Space-333x500.jpg' },
					]
				}],
		
		}, 4000);
		
		return portfoliosModel;

	}]);

}(angular.module('app')));