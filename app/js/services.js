'use strict';

/* Services */


// Based on phonecat tutorial

angular.module('sycamoServices', ['ngResource']).
  factory('Mail', function($resource){
  	return $resource('mails/:mailId.json', {}, {
  		query: {method:'GET', params:{mailId:'mails'}, isArray:true}
  	});
  });
