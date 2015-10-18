'use strict';

/**
 * @ngdoc overview
 * @name angWizardApp
 * @description
 * # angWizardApp
 *
 * Main module of the application.
 */
angular.module('angWizardApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	// route to show our basic form (/form)
	.state('form', {
		url: '/form',
		templateUrl: 'views/form.html',
		controller: 'formController'
	})

	// nested states 
	// each of these sections will have their own view
	// url will be nested (/form/profile)
	.state('form.userInfo', {
		url: '/userInfo',
		templateUrl: 'views/form-userInfo.html',
		controller: 'userInfoController'
	})

	// url will be /form/interests
	.state('form.preference', {
		url: '/preference',
		templateUrl: 'views/form-preference.html',
		controller: 'preferenceController'
	})

	// url will be /form/payment
	.state('form.personal', {
		url: '/personal',
		templateUrl: 'views/form-personal.html',
		controller: 'personalController'
	})
	
	.state('form.summary', {
		url: '/summary',
		templateUrl: 'views/form-summary.html',
		controller: 'summaryController'
	});

	// catch all route
	// send users to the form page 
	$urlRouterProvider.otherwise('/form/userInfo');
});
