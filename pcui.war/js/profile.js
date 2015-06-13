'use strict';

var app = angular.module('profileModule', ['batendModule']);

app.factory('profileService', ['restService',function(restService) {

	var instance = {};

	instance.isProfileAvail = function() {
		//console.log('email: '+instance.profile.email);
		//console.log('firstName: '+instance.profile.firstName);
		//console.log('lastName: '+instance.profile.lastName);

		if( !isVariableBlank(instance.profile.email) && 
			!isVariableBlank(instance.profile.firstName) && 
			!isVariableBlank(instance.profile.lastName) ) 
		{
			return true;
		}
		else
			return false;
			
	};

	instance.profile = {};

	instance.populateProfile = function(email) {
		console.log('in populateProfile - '+email);
		
		var promise = restService.getProfile(email);
		promise.then( function(response) {
			var profile = response.result;

			console.log(profile);

			if( !isVariableBlank(profile) ) {
				instance.profile.firstName = profile.firstName;
				instance.profile.lastName = profile.lastName;
				instance.profile.email = email;
				instance.profile.phoneNumber = profile.phoneNumber;
			}
			else
				instance.profile = {};
			//console.log(instance.profile);
		},
		function(error) {
			console.log(error);	
		});

		return promise;
	};

	instance.clearProfile = function() {
		instance.profile = {};
	};

	return instance;

}]);
