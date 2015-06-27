'use strict';


var app = angular.module('bats', ['batsPageFlow','batsLogin','batsDashboard','batendModule',
	'profileModule','batsSignup','batsForm','ngMockE2E']);

app.run(function($httpBackend) {
    
	$httpBackend.whenGET(/\.html$/).passThrough();

	$httpBackend.whenGET('/pcservice/rest/login/profiledata?email=a@a').respond({
		"successful": true,
		"resultError": null
	});

	$httpBackend.whenPUT('/register/generic').respond({
		"successful": true,
		"resultError": null
	});

	$httpBackend.whenGET('/pcservice/rest/login/profiledata?email=leelawliet7@gmail.com').respond({
		"result": {
			"status": "A",
			"firstName": "Bruce",
			"lastName": "wayne",
			"email": "batman@wayne",
			"phoneNumber": "(212) 123-4567"
		},
		"successful": true,
		"resultError": null
	});

	$httpBackend.whenGET('/pcservice/rest/login/google?email=leelawliet7@gmail.com').respond({
		"result": [
	   	{
				"firstName" : "Bruce",
				"lastName" : "Wayne",
				"profession" : "CEO",
				"phoneNumber" : "(123) 456-7890",
				"address" : {
					"line1" : "157 E 72nd St ",
					"city" : "New York",
					"state" : "NY",
					"country" : "USA",
					"zip" : 88888
				} 
			},
			{
				"firstName" : "Dick",
				"lastName" : "Grayson",
				"profession" : "Circus Performer",
				"phoneNumber" : "(123) 456-7890",
				"address" : {
					"line1" : "157 E 72nd St ",
					"city" : "New York",
					"state" : "NY",
					"country" : "USA",
					"zip" : 88888
				} 
			},
			{
				"firstName" : "Babara",
				"lastName" : "Gordon",
				"profession" : "Student",
				"phoneNumber" : "(123) 456-7890",
				"address" : {
					"line1" : "157 E 72nd St ",
					"city" : "New York",
					"state" : "NY",
					"country" : "USA",
					"zip" : 88888
				} 
			}
	   ],
	   "successful": true,
	   "resultError": null

	});

	$httpBackend.whenGET('/pcservice/rest/schedule?email=leelawliet7@gmail.com').respond({
		"result": [
		   	{
				"firstName" : "Bruce",
				"lastName" : "Wayne",
				"profession" : "CEO",
				"phoneNumber" : "(123) 456-7890",
				"startTime"  : 1432564200000,
				"endTime"  : 1432573200000
			},
			{
				"firstName" : "Dick",
				"lastName" : "Grayson",
				"profession" : "Circus Performer",
				"phoneNumber" : "(123) 456-7890",
				"startTime"  : 1429997400000,
				"endTime"  : 1430001000000
			}
	   ],
	   "successful": true,
	   "resultError": null

	});



    
});
