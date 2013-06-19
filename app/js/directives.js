'use strict';

/* Directives */






angular.module('sycamoDirectives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('ngCarousel', function() {
    return function(scope, elm, attrs) {
      scope.$watch('mail', function() {
        $(elm).carousel('pause');
      });
    } 
  })


  .directive('resizeImg', function($timeout){
  	return {
  		restrict: 'A',
  		link: function (scope, elm, attrs) {
  			var fullwidth = $(window).width();
        var fullheight = $(window).height();

          $(elm).resizecrop({
            width: 600,
            height: 400,
            vertical: "middle"
          });

  			// console.log("resizeImg is being used");
        // console.log(elm[0].getAttribute('class'));

        $timeout(function(){

          console.log("after timeout!!!!");
          console.log(elm);

          // $(elm).resizecrop({
          //   width: fullwidth*0.6,
          //   height: fullheight*0.6,
          //   vertical: "middle"
          // });

        }, 0);


  			// elm.css('border','5px solid red');
        // .resizecrop({
	  		// 	width: fullwidth,
	  		// 	height: 420,
	  		// 	vertical: "top"
	  		// })

			}
  		
  	}


  });