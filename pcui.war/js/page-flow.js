'use strict';

var app = angular.module('batsPageFlow',['ngRoute']);

 // configure our routes
app.config(['$routeProvider',function($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl : 'content-pages/login.html',
            controller : 'validateLoginCtrl'
        })
        .when('/signup', {
            templateUrl : 'content-pages/signup.html',
            controller : 'signupCtrl'
        })
        .when('/dashboard', {
            templateUrl : 'content-pages/dashboard.html',
            controller : 'dashboardCtrl'
        });
    
}]);

app.controller('pageFlowCtrl', 
  ['$scope','$location','profileService',function ($scope,$location,profileService) {
  	$scope.$loggedIn = false;

    $scope.$on('login',function(event){
    	$scope.$loggedIn = true;

        //var email = event.targetScope.email;
        //profileService.populateProfile(email);

        profileService.loggedInEmail = event.targetScope.email;

        //console.log(email);

        if( profileService.isProfileAvail() )
    	   $location.path('/dashboard');
        else
            $location.path('/signup');
    });

    $scope.$on('signin',function(event){
        $location.path('/dashboard');
    });
    
    $scope.$on('logout',function(){
    	$scope.$loggedIn = false;
        profileService.clearProfile();

    	$location.path('/login');
    });
    
    
    if( !$scope.$loggedIn )
    	$location.path('/login');
    else
    	$location.path('/dashboard');
    
    
  }]);
  