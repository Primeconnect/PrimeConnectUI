'use strict';

var app = angular.module('batsSignup', ['profileModule']);

 app.controller('signupCtrl', ['$scope','$http','profileService',function($scope,$http,profileService) {
	$scope.logout = function() {
		$scope.$emit('logout');
	};
	
	var initOwl = function() {

		$scope.owl = $(".owl-carousel");

		$scope.owl.owlCarousel({
			singleItem:true
		});

	};

	$scope.back = function() {
		var owlData = $scope.owl.data('owlCarousel');

		if( owlData.currentItem != 0 )
			$scope.owl.trigger('owl.prev');
	};

	$scope.next = function() {
		var owlData = $scope.owl.data('owlCarousel');

		if( owlData.currentItem != owlData.itemsAmount-1 )
			$scope.owl.trigger('owl.next');
	};

	initOwl();

}]);
