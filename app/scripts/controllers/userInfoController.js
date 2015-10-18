'use strict';

angular.module('angWizardApp')
.controller('userInfoController', ['$scope', '$state', function ($scope, $state) {

	$scope.submitUserInfo =  function () {
		$state.go("form.preference");  
	};
}]);
