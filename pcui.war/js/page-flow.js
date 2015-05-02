'use strict';

var app = angular.module('batsPageFlow',['ngRoute']);

 // configure our routes
    app.config(function($routeProvider) {

        $routeProvider
            .when('/login', {
                templateUrl : 'content-pages/login.html',
                controller : 'validateLoginCtrl'
            })
            .when('/dashboard', {
                templateUrl : 'content-pages/dashboard.html',
                controller : 'dashboardCtrl'
            });
        
    });

app.controller('pageFlowCtrl', 
  function ($scope,$location) {
  	$scope.$loggedIn = false;
  	
    $scope.$on('login',function(){
    	$scope.$loggedIn = true;
    	$location.path('/dashboard');
    });
    
    $scope.$on('logout',function(){
    	$scope.$loggedIn = false;
    	$location.path('/login');
    });
    
    if( !$scope.$loggedIn )
    	$location.path('/login');
    else
    	$location.path('/dashboard');
    
  });
  