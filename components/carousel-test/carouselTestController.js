(function(module) {
	
	module.controller('CarouselTestController', [function() {
		this.myInterval = 5000;
	  this.noWrapSlides = false;
	  var slides = this.slides = [];
	  this.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: '//placekitten.com/' + newWidth + '/300',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    this.addSlide();
	  }

	}]);

}(angular.module('app')));