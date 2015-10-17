(function(module) {

	module.config(function($sceDelegateProvider) {
	  $sceDelegateProvider.resourceUrlWhitelist([
	    // Allow same origin resource loads.
	    'self',
	    // Allow loading from our assets domain.  Notice the difference between * and **.
	    'http://player.vimeo.com/**',
      'http://content.jwplatform.com/**'
	  ]);
	});

}(angular.module('app', ['ui.router', 'ui.bootstrap'])));
