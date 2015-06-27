'use strict';

var app = angular.module('batsSignup', ['profileModule','batendModule']);

 app.controller('signupCtrl', ['$scope','profileService',
 	'$document','$compile','restService',function($scope,profileService,$document,$compile,restService) {

	$scope.logout = function() {
		$scope.$emit('logout');
	};

	$scope.formUrl = {
		profileDetails : 'content-pages/component/profile-details.html',
		profDetails : 'content-pages/component/prof-details.html',
		clientDetails : 'content-pages/component/client-details.html'
	};

	$scope.email = profileService.loggedInEmail;
	//console.log(profileService);

	$scope.signupFormData = {
		billingShippingFlag : true
	};
	
	var initOwl = function() {

		$document.ready(function() {
			$scope.owl = $(".owl-carousel");

			$scope.owl.owlCarousel({
				singleItem:true
			});
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

	$scope.addClient = function() {
		var owlData = $scope.owl.data('owlCarousel');

		var html = '<div><div class="panel-body"><div ng-include="formUrl.clientDetails"></div></div></div>';
		owlData.addItem( $compile(html)($scope) );
	};

	$scope.addProfessional = function() {
		var owlData = $scope.owl.data('owlCarousel');

		var html = '<div><div class="panel-body"><div ng-include="formUrl.profDetails"></div></div></div>';
		owlData.addItem( $compile(html)($scope) );
	};

	$scope.reset = function() {
		var owlData = $scope.owl.data('owlCarousel');
		console.log(owlData);

		while(owlData.itemsAmount > 2)
			owlData.removeItem(2);
	};

	initOwl();

	$scope.submit = function() {
		console.log($scope);
		
		restService.createProfile($scope.signupFormData);

	};

}]);
