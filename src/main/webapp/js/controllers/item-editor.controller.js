(function() {
    
    'use strict';
    
    angular.module('ShoppingListApp')
        .controller('ItemEditorController', ItemEditorController);
    
    ItemEditorController.$inject = ['item', 'DataService', '$state'];
    function ItemEditorController(item, DataService, $state) {
        var ctrl = this;
        
        if (!item || !item.data) {
            ctrl.item = {
                name : '',
                quantity : 0,
                bought : false
            };
        } else {
            ctrl.item = item.data;
        }
        
        ctrl.saveItem = function() {
            if (!ctrl.item.id) {
                DataService.addItem(ctrl.item).then(function() {
                    $state.go('list');
                });
            } else {
                DataService.updateItem(ctrl.item).then(function() {
                    $state.go('list');
                });
            }
        };
    }
    
})();