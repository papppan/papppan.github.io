(function(){

	'use strict';

	angular.module('main')
	.config(routesConfig);

	routesConfig.$inject = ['$stateProvider'];

	function routesConfig($stateProvider){
		$stateProvider
		.state('others',{
			url: '/others',
			templateUrl: 'content/others.html'
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
		.state('TbcAV2023',{
			url: '/outreach/TbcAV2023',
			templateUrl: 'content/articles/TbcAV2023/TbcAV2023.html'
		})
		.state('D6b2023',{
			url: '/outreach/D6b2023',
			templateUrl: 'content/articles/D6b2023/D6b2023.html'
		});
	}
})();
