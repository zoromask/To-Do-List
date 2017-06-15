(function() {
  	'use strict';

  	angular
		.module('to-do-list')
		.config(routerConfig);

  	/** @ngInject */
  	function routerConfig($stateProvider, $urlRouterProvider) {
  		$stateProvider
			.state('index', {
				url: "/",
				templateUrl: "app/main/content.html"
			})
		$urlRouterProvider.otherwise('/');
	}
})();