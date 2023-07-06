(function(){

	'use strict';

	angular.module('main')
	.config(routesConfig);

	routesConfig.$inject = ['$stateProvider'];

	function routesConfig($stateProvider){
		$stateProvider
		.state('projects',{
			url: '/projects',
			templateUrl: 'content/projects.html'
		})
		.state('teaching', {
			url: '/teaching',
			templateUrl: 'content/teaching.html'
		})
		.state('home',{
			url: '/',
			templateUrl: 'assets/pages/home.html',
		})
		.state('researchgroup',{
			url: '/researchgroup',
			templateUrl: 'content/researchgroup.html',
		})
		.state('publications',{
			url: '/publications',
			templateUrl: 'content/publications.html',
		})
		.state('opportunities',{
			url: '/opportunities',
			templateUrl: 'content/opportunities.html',
		})
		.state('outreach',{
			url: '/outreach',
			templateUrl: 'content/outreach.html' 
		})
		.state('D6b2023',{
			url: '/outreach/D6b2023',
			templateUrl: 'content/articles/D6b2023/D6b2023.html'
		});
	}
})();
