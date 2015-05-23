'use strict';

var app = angular.module('batsDashboard', []);

 app.controller('dashboardCtrl', ['$scope','$http','profileService',function($scope,$http,profileService) {
	$scope.logout = function() {
		$scope.$emit('logout');
	};
	
	$scope.displayName = profileService.profile.firstName + ' ' + profileService.profile.lastName;

	//$scope.professionals = getDoctors();
	
	$scope.getDoctors = function() {
		$http.get('json/doctors.json').
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.professionals = data.result;
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	};
	
	$scope.getSchedules = function() {
		$http.get('json/schedule.json').
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.schedules = data.result;
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	};
	
	$scope.getDoctors();
	$scope.getSchedules();
	
}]);
