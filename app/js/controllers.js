'use strict';


/* Controllers */

function MailListCtrl($scope, Mail) {
	$scope.mails = Mail.query();
  $scope.orderProp = '-dateReceived';


  $scope.$on('$viewContentLoaded', function(){

  // 		var contentBlocks = $('#cover-page>div.row-fluid>div.cover-container>figure>div.prime');

  // 		var test = angular.element('#cover-page').addClass('dumb');
  // 		var testBool = test.hasClass('dumb');

			// console.log(contentBlocks); // this is different from what i saw from chrome console
			console.log("ContentLoaded");
      console.log($('.prime'));

      var fullwidth = $(window).width();

			// $('.prime').resizecrop({
			// 	width:fullwidth,
			// 	height:100,
			// 	vertical:"top"
			// });

  });

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

