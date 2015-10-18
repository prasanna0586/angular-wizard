'use strict';

angular.module('angWizardApp')
  .controller('summaryController', ['$scope', '$state', function ($scope, $state) {
	  
	  $scope.gotoPersonalInfoPage = function () {
		  $state.go('form.personal');
	  }
	  
}]);
