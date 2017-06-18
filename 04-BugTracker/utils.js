var utils = angular.module('utils', []);

utils.value('defaultTrimLength', 30);

utils.filter('trimText', function(defaultTrimLength){
	function getTrimmedText(data, len){
		return data.length < len ? data : data.substr(0,len) + '...';
	}
	return function(data, trimLength){
		trimLength = trimLength || defaultTrimLength;
		return getTrimmedText(data, trimLength);
	}
});

utils.filter('elapsed', function(){
	return function(data){
		return moment(data).fromNow();
	};
});