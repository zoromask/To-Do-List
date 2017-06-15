(function() {
	'use strict';
	angular.module('to-do-list')
		.factory('notifyOrder', function () {
			var numberOfOrder = '';
			return {
				setData:function (data) {
					numberOfOrder = data;
				},
				getData:function () {
					return numberOfOrder;
				}
			};
		})
		.run(runBlock);
	function runBlock(){
		
	}
})();