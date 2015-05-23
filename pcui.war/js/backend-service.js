'use strict';

var app = angular.module('batendModule', []);

app.factory('restService', ['$http','$q',function($http,$q) {
   
	var baseRestUrl = "http://localhost:8080/pcservice/rest";

	var instance = {};

	//generic methods

	instance.wrapErrorObjects = function(response,status,header) {
		return {
			error : response.errorResult,
			status : status,
			header : header
		};
	};

	instance.callGetService = function(url) {
		var deferred = $q.defer();
	    $http.get(url)
	      .success( function(response,status,header) {
	      	if( response.successful )
	      		deferred.resolve(response);
	      	else
	      		deferred.reject(instance.wrapErrorObjects(response,status,header));	
	      })
	      .error(function(response,status,header) {
	      	deferred.reject(response,status,header);
	      })
	      return deferred.promise;
	};

	//specific service methods
	instance.getProfile = function(email) {
    	var url = baseRestUrl+'/dummy?email='+email;
	    return this.callGetService(url);
    };

    return instance;	

}]);
