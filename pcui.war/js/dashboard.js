'use strict';

var app = angular.module('batsDashboard', []);

 app.controller('dashboardCtrl', function($scope,$http) {
	$scope.logout = function() {
		$scope.$emit('logout');
	};
	
	//$scope.professionals = getDoctors();
	
	$scope.getDoctors = function() {
		$http.get('/pcservice/rest/login/google?email=chetancmehta@gmail.com').
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
		$http.get('/pcservice/rest/schedule?email=chetancmehta@gmail.com').
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
	
});
