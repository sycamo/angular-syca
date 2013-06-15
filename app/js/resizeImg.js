
$(document).ready(function(){

	var contentBlocks = $('#cover-page>div.row-fluid>div');



	contentBlocks.each(function(){

	  // console.log("inside each");
	  // console.log($(this).attr('class'));

	  if($(this).hasClass('cover-container')){

	    // console.log("inside cover-container");

	    $(this).children('img').resizecrop({
	      width:40,  // adjustable
	      height:60,
	      vertical:"top"
	    });

	  }

	});

});  