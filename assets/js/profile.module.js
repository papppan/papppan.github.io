(function(){
	"use strict";

	angular.module('profile',['main'])
	.config(config);

	config.$inject = ['$urlRouterProvider'];
	function config($urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		//reroute to home if user goes to path that doesn't exist
	}
})();
