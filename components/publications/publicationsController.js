(function(module) {
	
	module.controller('PublicationsController', [function() {

		var pc = {
			publications: [
				{
					image: '/images/publications/linda graham portfolio 2011-2017.jpg',
					caption: 'Linda Graham - Portfolio 2011-2017',
					pub: '/images/publications/Linda Portfolio Revised.pdf'
				},
				{
					image: '/images/publications/linda graham clay portfolio 1975-2018.jpg',
					caption: 'Linda Graham - Clay Portfolio 1975-2018',
					pub: '/images/publications/FinalClayBook1.pdf'
				},
				{
					image: '/images/publications/linda graham digital work.jpg',
					caption: 'Linda Graham - Digital Work',
					pub: '/images/publications/ARwholeBook.pdf'
				},
			]
		};

		pc.launchPublication = launchPublication;

		function launchPublication(p) {
			window.open(p.pub, '_blank');
		}

		return pc;
	}]);

}(angular.module('app')));