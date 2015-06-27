'use strict';

var app = angular.module('batendModule', []);

app.factory('restService', ['$http','$q',function($http,$q) {
   
	var baseRestUrl = "/pcservice/rest";

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
	      	//console.log(response);
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

	instance.callPutService = function(url,data) {
		console.log(url);
		console.log(data);

		var deferred = $q.defer();
	    $http.put(url,data)
	      .success( function(response,status,header) {
	      	//console.log(response);
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
    	var url = baseRestUrl+'/login/profiledata?email='+email;
	    return this.callGetService(url);
    };

    instance.getDoctor = function(email) {
    	var url = baseRestUrl+'/login/google?email='+email;
	    return this.callGetService(url);
    };

    instance.getSchedule = function(email) {
    	var url = baseRestUrl+'/schedule?email='+email;
	    return this.callGetService(url);
    };

    instance.createProfile = function(formData) {
    	var url = baseRestUrl+'/register/generic';
	    console.log(formData);

	    var param = {
	    	"firstName": formData.firstName,
	    	"lastName": formData.lastName,
	    	"email": formData.email,
	    	"phoneNumber": formData.phone,
	    	"addressLine1": formData.line1,
	    	"addressCity": formData.city,
	    	"addressState": formData.state,
	    	"addressZip": formData.zip,
	    	"addressCountry": formData.country,
	    	"billingShippingFlag": formData.billingShippingFlag
	    };

	    addFormValueToObject(formData,'password',param);
	    addFormValueToObject(formData,'middleName',param);
	    addFormValueToObject(formData,'faxNumber',param);
	    addFormValueToObject(formData,'addressLine2',param);
	    addFormValueToObject(formData,'billingAddressLine1',param);
	    addFormValueToObject(formData,'billingAddressLine2',param);
	    addFormValueToObject(formData,'billingAddressCity',param);
	    addFormValueToObject(formData,'billingAddressState',param);
	    addFormValueToObject(formData,'billingAddressZip',param);
	    addFormValueToObject(formData,'billingAddressCountry',param);

	    return this.callPutService('/register/generic',param);

    };

    return instance;	

}]);
