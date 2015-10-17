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
						{ videoCaption: 'Multiverse 3', imageSmall:'video-162x162.png', videoLarge:'http://content.jwplatform.com/players/RJS7Qcdi-S3u9V5Nq.html' }
					]
				},
				{
					portfolio: 'electromagneticTransformation',
					portfolioName: 'ELECTROMAGNETIC TRANSFORMATION',
					portfolioImage: 'IceCubeGallery-300x200.jpg',
					images: [
						{ videoCaption: 'Multiverse 3', imageSmall:'video-162x162.png', videoLarge:'http://content.jwplatform.com/players/RJS7Qcdi-S3u9V5Nq.html' },
						{ imageCaption: 'Illusive Reality', imageSmall:'IllusiveReality2-162x162.jpg', imageLarge:'IllusiveReality2-333x500.jpg' },
						{ imageCaption: 'Evolving Multiverses', imageSmall:'Evolving-Multiverses-162x162.jpg', imageLarge:'Evolving-Multiverses-333x500.jpg' },
						{ imageCaption: 'Serenity', imageSmall:'Serenity-162x162.jpg', imageLarge:'Serenity-333x500.jpg' },
						{ imageCaption: 'Reflections Deep Space', imageSmall:'Reflections-Deep-Space-162x162.jpg', imageLarge:'Reflections-Deep-Space-333x500.jpg' }
					]
				},
				{
					portfolio: 'myModernAesthetic',
					portfolioName: 'MY MODERN AESTHETIC',
					portfolioImage: 'GalleryViewFront.jpg',
					images: [
						{ imageCaption: 'Coney Island', imageSmall:'ConeyIslandFolder.jpg', imageLarge:'ConeyIslandCover.jpg' },
						{ imageCaption: 'Dualities', imageSmall:'DualitiesFolder.jpg', imageLarge:'DualitiesCover.jpg' },
						{ imageCaption: 'Euclids Leftovers', imageSmall:'EuclidsLeftoversFolder.jpg', imageLarge:'EuclidsLeftoversCover.jpg' },
						{ imageCaption: 'Euclids Study', imageSmall:'EuclidsStudyFolder.jpg', imageLarge:'EuclidsStudyCover.jpg' },
						{ imageCaption: 'Ice', imageSmall:'IceFolder.jpg', imageLarge:'IceCover.jpg' },
						{ imageCaption: 'Intergalactic Maze', imageSmall:'IntergalacticMazeFolder.jpg', imageLarge:'IntergalacticMazeCover.jpg' },
						{ imageCaption: 'Negative Spaces', imageSmall:'NegativeSpacesFolder.jpg', imageLarge:'NegativeSpacesCover.jpg' },
						{ imageCaption: 'Portals', imageSmall:'PortalsFolder.jpg', imageLarge:'PortalsCover.jpg' },
						{ videoCaption: 'My Modern Aesthetic', imageSmall:'VideoIcon.jpg', videoLarge:'http://content.jwplatform.com/players/gxvp9GtL-S3u9V5Nq.html' }
					]
				},
				{
					portfolio: 'personalPerceptions',
					portfolioName: 'PERSONAL PERCEPTIONS',
					portfolioImage: 'Personal Perceptions front.jpg',
					images: [
						{ imageCaption: 'PP #1', imageSmall:'PP1folder.jpg', imageLarge:'PP1cover.jpg' },
						{ imageCaption: 'PP #2', imageSmall:'PP2folder.jpg', imageLarge:'PP2cover.jpg' },
						{ imageCaption: 'PP #3', imageSmall:'PP3folder.jpg', imageLarge:'PP3cover.jpg' },
						{ imageCaption: 'PP #4', imageSmall:'PP4folder.jpg', imageLarge:'PP4cover.jpg' },
						{ imageCaption: 'PP #5', imageSmall:'PP5folder.jpg', imageLarge:'PP5cover.jpg' },
						{ imageCaption: 'PP #6', imageSmall:'PP6folder.jpg', imageLarge:'PP6cover.jpg' },
						{ imageCaption: 'PP #7', imageSmall:'PP7folder.jpg', imageLarge:'PP7cover.jpg' },
						{ imageCaption: 'PP #8', imageSmall:'PP8folder.jpg', imageLarge:'PP8cover.jpg' },
						{ imageCaption: 'PP #9', imageSmall:'PP9folder.jpg', imageLarge:'PP9cover.jpg' },
						{ imageCaption: 'PP #10', imageSmall:'PP10folder.jpg', imageLarge:'PP10cover.jpg' },
						{ imageCaption: 'PP #11', imageSmall:'PP11folder.jpg', imageLarge:'PP11cover.jpg' },
						{ imageCaption: 'PP #12', imageSmall:'PP12folder.jpg', imageLarge:'PP12cover.jpg' },
						{ imageCaption: 'PP #13', imageSmall:'PP13folder.jpg', imageLarge:'PP13cover.jpg' },
						{ imageCaption: 'PP #14', imageSmall:'PP14folder.jpg', imageLarge:'PP14cover.jpg' },
						{ imageCaption: 'PP #15', imageSmall:'PP15folder.jpg', imageLarge:'PP15cover.jpg' }
					]
				},
				{
					portfolio: 'binaries',
					portfolioName: 'BINARIES',
					portfolioImage: 'BinaryFront.jpg',
					images: [
						{ imageCaption: 'Dystopia', imageSmall:'DystopiaFolder.jpg', imageLarge:'DystopiaCover.jpg' },
						{ imageCaption: 'Dystopia: Escape', imageSmall:'DystopiaEscapeFolder.jpg', imageLarge:'DystopiaEscapeCover.jpg' },
						{ imageCaption: 'Dystopia: Fletcher Mural', imageSmall:'DystopiaFletcherMuralFolder.jpg', imageLarge:'DystopiaFletcherMuralCover.jpg' },
						{ imageCaption: 'Gallery: Binaries Poster', imageSmall:'GalleryBinariesPosterFolder.png', imageLarge:'GalleryBinariesPosterCover.png' },
						{ imageCaption: 'Gallery: Signage', imageSmall:'GallerySignageFolder.jpg', imageLarge:'GallerySignageCover.jpg' },
						{ imageCaption: 'Resilience: A', imageSmall:'ResilienceAFolder.jpg', imageLarge:'ResilienceACover.jpg' },
						{ imageCaption: 'Resilience: B', imageSmall:'ResilienceBFolder.jpg', imageLarge:'ResilienceBCover.jpg' },
						{ imageCaption: 'Resilience: C', imageSmall:'ResilienceCFolder.jpg', imageLarge:'ResilienceCCover.jpg' },
						{ imageCaption: 'Transition: Entry', imageSmall:'TransitionEntryFolder.jpg', imageLarge:'TransitionEntryCover.jpg' },
						{ imageCaption: 'Transition: ScreenShot', imageSmall:'TransitionScreenShotFolder.png', imageLarge:'TransitionScreenShotCover.png' },
						{ videoCaption: 'Exodus Animation', imageSmall:'VideoIcon.jpg', videoLarge:'http://content.jwplatform.com/players/InPrbxuD-S3u9V5Nq.html' }
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
						{ imageCaption: 'Close Up', imageSmall:'CloseUp-162x162.jpg', imageLarge:'CloseUp-501x500.jpg' },
						{ imageCaption: 'Garden Gourd', imageSmall:'Garden-Gourd-162x162.jpg', imageLarge:'Garden-Gourd-750x500.jpg' },
						{ imageCaption: 'Genetic Dispersment', imageSmall:'genetic-dispersment-162x162.jpg', imageLarge:'genetic-dispersment-333x500.jpg' },
						{ imageCaption: 'Genetic Gems 2 Detail', imageSmall:'Genetic-Gems-2-Detail-162x162.jpg', imageLarge:'Genetic-Gems-2-Detail-644x500.jpg' },
						{ imageCaption: 'Genetic Gems', imageSmall:'Genetic-Gems-162x162.jpg', imageLarge:'Genetic-Gems-638x500.jpg' },
						{ imageCaption: 'Gestures', imageSmall:'Gestures-162x162.jpg', imageLarge:'Gestures-610x500.jpg' },
						{ imageCaption: 'Lyrical Lines 1', imageSmall:'LyricalLines1-162x162.jpg', imageLarge:'LyricalLines1-666x500.jpg' },
						{ imageCaption: 'Lyrical Lines 2', imageSmall:'LyricalLines2-162x162.jpg', imageLarge:'LyricalLines2-666x500.jpg' },
						{ imageCaption: 'Mock Jungle', imageSmall:'Mock-Jungle-162x162.jpg', imageLarge:'Mock-Jungle-333x500.jpg' },
						{ imageCaption: 'Sex in the Garden', imageSmall:'Sex-in-the-Garden-162x162.jpg', imageLarge:'Sex-in-the-Garden-750x500.jpg' },
						{ imageCaption: 'Whats in a Gene', imageSmall:'Whats-in-a-Gene-162x162.jpg', imageLarge:'Whats-in-a-Gene-500x500.jpg' },
						{ imageCaption: 'Yummy Pink Garden 1', imageSmall:'yummy-pink-garden1-162x162.jpg', imageLarge:'yummy-pink-garden1-500x500.jpg' }
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
