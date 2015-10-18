'use strict';

angular.module('angWizardApp')
  .controller('preferenceController', ['$scope', '$state', function ($scope, $state) {
	  
	  $scope.submitPersonalInfo = function () {
		  $state.go('form.personal');
	  };
	  
	  $scope.gotoUserInfoPage = function () {
		  $state.go('form.userInfo');
	  };
	  
}]);
