'use strict';

var app = angular.module('batsLogin',['batsPageFlow','ngCookies']);

app.controller('validateLoginCtrl', function($scope) {
	
	$scope.login = function() {
		$scope.$emit('login');
	};
	
	$scope.ssoError;
	
	$scope.handleAuthResult = function(token) {		
		if (token && !token.error) {
		        $scope.$apply(function () {
		            $scope.login();
		        });

        } else {
          $scope.ssoError = 'Error signing in with google - ' + token.error;
        }
	};
	
	$scope.googleLogin = function() {
		
		gapi.auth.authorize({
			client_id: '214597425275-51mqu7481m0496nlp8t8l3hn6j7dthan.apps.googleusercontent.com', 
			scope: 'https://www.googleapis.com/auth/plus.me', 
			immediate: false
		}, $scope.handleAuthResult);
		
		return false;
	};
	
	//gapi.client.setApiKey('AIzaSyBmfyJFeowU_jdSz_O5_rNTZD1JVBLY5QU');
	
});

