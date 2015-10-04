(function(module) {
	
	module.factory('PortfolioService', function() {

		var portfoliosModel = {
			currentPortfolio: null,
			portfolios: {
				exhibitions: [
				{
					portfolio: 'naturalSelection',
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
					portfolio: 'multiverse3',
					portfolioName: 'MULTIVERSE 3',
					portfolioImage: 'Screen-Shot-2013-08-26-at-10.19.52-AM1-300x200.png',
					images: [
						{ imageCaption: 'Multiverse 3', imageSmall:'Screen-Shot-2013-08-26-at-10.13.54-AM-162x162.png', imageLarge:'Screen-Shot-2013-08-26-at-10.13.54-AM.png' },
						{ videoCaption: 'Multiverse 3', imageSmall:'video-162x162.png', videoLarge:'http://player.vimeo.com/video/73148310' }
					]
				},
				{
					portfolio: 'electromagneticTransformation',
					portfolioName: 'ELECTROMAGNETIC TRANSFORMATION',
					portfolioImage: 'IceCubeGallery-300x200.jpg',
					images: [
						{ videoCaption: 'Multiverse 3', imageSmall:'video-162x162.png', videoLarge:'http://player.vimeo.com/video/73148310' },
						{ imageCaption: 'Illusive Reality', imageSmall:'IllusiveReality2-162x162.jpg', imageLarge:'' },
						{ imageCaption: 'Evolving Multiverses', imageSmall:'Evolving-Multiverses-162x162.jpg', imageLarge:'Evolving-Multiverses-333x500.jpg' },
						{ imageCaption: 'Serenity', imageSmall:'Serenity-162x162.jpg', imageLarge:'Serenity-333x500.jpg' },
						{ imageCaption: 'Reflections Deep Space', imageSmall:'Reflections-Deep-Space-162x162.jpg', imageLarge:'Reflections-Deep-Space-333x500.jpg' }
					]
				}],
				workingWithClay: [
				{
					portfolio: 'earlyWorks',
					portfolioName: 'EARLY WORKS',
					portfolioImage: 'dusk-300x200.jpg',
					images: [
						{ imageCaption: 'Ancient Warrior', imageSmall:'AncientWarrior-162x162.jpg', imageLarge:'AncientWarrior-388x500.jpg' },
						{ imageCaption: 'Cylinders', imageSmall:'Cylinders-162x162.jpg', imageLarge:'Cylinders-344x500.jpg' },
						{ imageCaption: 'Dusk', imageSmall:'dusk-162x162.jpg', imageLarge:'dusk-621x500.jpg' },
						{ imageCaption: 'Egyption Teapot', imageSmall:'EgyptionTeapot-162x162.jpg', imageLarge:'EgyptionTeapot-307x500.jpg' },
						{ imageCaption: 'Low Bowl', imageSmall:'lowBowl-162x162.jpg', imageLarge:'lowBowl-641x500.jpg' },
						{ imageCaption: 'Mike Horn', imageSmall:'MikesHorn-162x162.jpg', imageLarge:'MikesHorn-500x500.jpg' },
						{ imageCaption: 'Mini Tea Pot', imageSmall:'MiniTeaPot-162x162.jpg', imageLarge:'MiniTeaPot-364x500.jpg' },
						{ imageCaption: 'P7034994', imageSmall:'P7034994-162x162.jpg', imageLarge:'P7034994-375x500.jpg' },
						{ imageCaption: 'Planes and Angels Motion', imageSmall:'Planes-and-Angels-Motion-162x162.jpg', imageLarge:'Planes-and-Angels-Motion-397x500.jpg' },
						{ imageCaption: 'Planes Angle 4', imageSmall:'PlanesAngle4-162x162.jpg', imageLarge:'PlanesAngle4-616x500.jpg' },
						{ imageCaption: 'Red Horn', imageSmall:'RedHorn-162x162.jpg', imageLarge:'RedHorn-224x500.jpg' },
						{ imageCaption: 'Segmented', imageSmall:'Segmented-162x162.jpg', imageLarge:'Segmented-510x500.jpg' },
						{ imageCaption: 'Tall Bowl', imageSmall:'tallBowl-162x162.jpg', imageLarge:'tallBowl-650x500.jpg' },
						{ imageCaption: 'Tall Short', imageSmall:'TallShort-162x162.jpg', imageLarge:'TallShort-379x500.jpg' },
						{ imageCaption: 'Three Bowls', imageSmall:'ThreeBowls-162x162.jpg', imageLarge:'ThreeBowls-606x500.jpg' },
						{ imageCaption: 'Top 6', imageSmall:'Top-6-162x162.jpg', imageLarge:'Top-6-396x500.jpg' },
						{ imageCaption: 'Top 9', imageSmall:'Top-9-162x162.jpg', imageLarge:'Top-9-395x500.jpg' },
						{ imageCaption: 'Top 10', imageSmall:'Top-10-162x162.jpg', imageLarge:'Top-10-630x500.jpg' }
					]
				},
				{
					portfolio: 'laterWorks',
					portfolioName: '2007-2011',
					portfolioImage: 'yummy-pink-garden1-300x200.jpg',
					images: [
						{ videoCaption: 'Multiverse 3', imageSmall:'video-162x162.png', videoLarge:'http://player.vimeo.com/video/73148310' },
						{ imageCaption: 'Illusive Reality', imageSmall:'IllusiveReality2-162x162.jpg', imageLarge:'' },
						{ imageCaption: 'Evolving Multiverses', imageSmall:'Evolving-Multiverses-162x162.jpg', imageLarge:'Evolving-Multiverses-333x500.jpg' },
						{ imageCaption: 'Serenity', imageSmall:'Serenity-162x162.jpg', imageLarge:'Serenity-333x500.jpg' },
						{ imageCaption: 'Reflections Deep Space', imageSmall:'Reflections-Deep-Space-162x162.jpg', imageLarge:'Reflections-Deep-Space-333x500.jpg' }
					]
				}]
			}
		};
		
		portfoliosModel.setCurrentPortfolio = function(portfolio) {
			portfoliosModel.currentPortfolio = portfolio;
		}

		return portfoliosModel;

	});

}(angular.module('app')));