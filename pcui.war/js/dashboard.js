'use strict';

var app = angular.module('batsDashboard', ['profileModule']);

 app.controller('dashboardCtrl', ['$scope','$http','profileService','restService',function($scope,$http,profileService,restService) {
	$scope.logout = function() {
		$scope.$emit('logout');
	};
	
	$scope.displayName = profileService.profile.firstName + ' ' + profileService.profile.lastName;

	//$scope.professionals = getDoctors();
	
	$scope.getDoctors = function(email) {
		var promise = restService.getDoctor(profileService.profile.email);
		promise.then( function(data,status,headers) {
			$scope.professionals = data.result;
		});

	};
	
	$scope.getSchedules = function(email) {
		var promise = restService.getSchedule(profileService.profile.email);
		promise.then( function(data,status,headers) {
			$scope.schedules = data.result;
		});
	};
	
	var email = profileService.profile.email;

	$scope.getDoctors(email);
	$scope.getSchedules(email);
	
}]);
