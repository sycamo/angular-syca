'use strict';


/* Controllers */

function MailListCtrl($scope, Mail, $timeout) {
	$scope.mails = Mail.query();
  $scope.orderProp = '-dateReceived';


  // $scope.$on('$viewContentLoaded', function(){

		// console.log("ContentLoaded");
  //   console.log($('.prime'));

  //   $timeout(function(){

  //     console.log("after timeout!!!!");
  //     console.log($('.prime').attr('src'));

  //   }, 10000);

  // });

}

//MailListCtrl.$inject = ['$scope', 'Mail'];


function MailDetailCtrl($scope, $routeParams, Mail) {
  $scope.mail = Mail.get({mailId: $routeParams.mailId}, function(mail) {
    $scope.mainImageUrl = mail.gallery[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//MailDetailCtrl.$inject = ['$scope', '$routeParams', 'Mail'];

