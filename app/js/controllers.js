'use strict';

/* Controllers */

// angular.module('myApp.controllers', []).
//   controller('MailListCtrl', [function($scope, $http) {

// 	  $http.get('mails/mails.json').success(function(data) {
	  	
// 	  	console.log("success. old module here");

// 	  	$scope.mails = data;

// 	  });

// 	  $scope.orderProp = 'dateReceived';

//   }])
//   .controller('MyCtrl2', [function() {

//   	console.log("did you come to myctrl2?");

//   }]);



/* Controllers */

function MailListCtrl($scope, $http) {
  $http.get('mails/mails.json').success(function(data) {

  	console.log("success. new function function here");

  	$scope.mails = data;
  });

  $scope.orderProp = 'dateReceived';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];

function MyCtrl2($scope) {
  $scope.state = "view2";
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];


