'use strict';

angular.module('angWizardApp')
  .controller('personalController', ['$scope', '$state', function ($scope, $state) {
	  
	  $scope.submitPersonalInfo = function () {
		  $state.go('form.summary');
	  };
	  
	  $scope.gotoPreferencePage = function () {
		  $state.go('form.preference');
	  };
	  
}]);
