'use strict';

/* Directives */






angular.module('sycamoDirectives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('resizeImg', function(){
  	return {
  		restrict: 'A',
  		link: function (scope, elm, attrs) {
  			var fullwidth = $(window).width();
  			console.log("resizeImg is being used");

  			// elm.css('border','5px solid red').resizecrop({
	  		// 	width: fullwidth,
	  		// 	height: 420,
	  		// 	vertical: "top"
	  		// })

			}
  		
  	}
  		// var fullwidth = $(window).width()
  		// console.log(fullwidth);
  		// console.log(angular.element(element).addClass('testclass'));
  		
  		// function(scope, element, attrs) {
  		// element.css('border','5px solid red').resizecrop({
  		// 	width: fullwidth,
  		// 	height: 480,
  		// 	vertical: "top"
  		// });
	


  });