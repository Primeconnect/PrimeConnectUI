'use strict';

//for initial
function googleSetup() {
  gapi.client.setApiKey('AIzaSyBmfyJFeowU_jdSz_O5_rNTZD1JVBLY5QU');
}

var app = angular.module('batsLogin',['batsPageFlow','ngCookies']);

app.controller('validateLoginCtrl', ['$scope','profileService',function($scope,profileService) {
	
	//profileService.clearProfile();

	$scope.login = function(email) {
		console.log(email);
		var promise = profileService.populateProfile(email);
		promise.then( function() {
			$scope.$emit('login');
		});
		console.log('done with login');
	};
	
	$scope.ssoError;
	//$scope.loggedInEmail;
	
	var handleGoogleLogin = function(token) {	
		if (token && !token.error) {
				//console.log(token);
		        //$scope.$apply(function () {
		        	getGoogleProfile();
		            //$scope.login();
		        //});

        } else {
          $scope.ssoError = 'Error signing in with google - ' + token.error;
        }
	};
	
	$scope.googleLogin = function() {
		
		gapi.auth.authorize({
			client_id: '1023346956120-vkk31f9as9dlolqsqo85fba2iri3falq.apps.googleusercontent.com', 
			scope: 'email', 
			immediate: false
		}, function(token) {	
			if (token && !token.error) {
					//console.log(token);
			        $scope.$apply(function () {
			        	getGoogleProfile();
			        	//console.log($scope.email);
			        });

	        } else {
	          $scope.ssoError = 'Error signing in with google - ' + token.error;
	        }
		});
		
		return false;
	};


	$scope.googleLoginDetails = {};
	
	var getGoogleProfile = function() {

		gapi.client.load('plus', 'v1', function() {
          var request = gapi.client.plus.people.get({
            'userId': 'me'
          });
          request.execute(function(resp) {
          	
          	for( var i=0; i<resp.emails.length; i++) {
          		//console.log(resp.emails[i].type);
          		if( resp.emails[i].type == 'account') {
          			$scope.$apply(function() {
          				$scope.googleLoginDetails.email = resp.emails[i].value;	
          				//$scope.email = resp.emails[i].value;

          				$scope.login(resp.emails[i].value);
          			});
          			break;
          		}
          	}
          	
          	//console.log(resp);
          	//console.log($scope.email);
          });
        });
	};
	
}]);

