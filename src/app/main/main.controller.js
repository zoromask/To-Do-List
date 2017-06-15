'use strict'

angular.module('to-do-list')
	.controller('MainController', function($scope){
		var vm = this;
		$scope.itemName = "";
		$scope.selectedItems = [];
		$scope.isSelectAll = false;
		/* create array items */
		$scope.listItem = [{
			id: 1,
			name: "item 1",
			checked: false
		},{
			id: 2,
			name: "item 2",
			checked: false
		},{
			id: 3,
			name: "item 3",
			checked: false
		},];
		/* method add new item */
		vm.addItem = function(t){
			if(t.itemName.replace(/\s/g, "") != "") {
				t.listItem.push({
					id: t.listItem.length + 1,
					name: t.itemName,
					checked: false
				})
				t.itemName = ""
			}
		}
		/* method select an item */
		vm.select = function(t, item) {
			if(item.checked == true){
				item.checked = false;
				var index = t.selectedItems.filter(function(el){
					el.id == item.id
				});
				t.selectedItems.splice(index, 1);
			}
			else{
				item.checked = true;
				t.selectedItems.push(item);
			}
		}
		/* method delete selected items */
		vm.deleteItem = function(t){
			t.selectedItems = [];
			for(var i = t.listItem.length; i > 0; i--) {
				if(t.listItem[i-1].checked == true) {
					t.listItem.splice(i-1, 1);
				}
			}
			t.isSelectAll = false;
		}
		/* click checkbox select all items */
		vm.selectAll = function(t, event){
			for(var i = 0; i < t.listItem.length; i++) {
				t.listItem[i].checked = t.isSelectAll;
				if (t.isSelectAll == true) {
					t.selectedItems.push(t.listItem[i]);
				}
			}
			if (t.isSelectAll == false) {
				t.selectedItems = [];
			}
		}
	});