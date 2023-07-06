(function() {
"use strict";

angular.module('common', [])
	.constant('apiPath', 'https://www.imsc.res.in/~padmanath/')
	// .constant('apiPath', 'http://localhost:3000/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}
})();
