(function() {
    
    'use strict';
    
    angular.module('ShoppingListApp')
        .controller('ShoppingListController', ShoppingListController);
    
    ShoppingListController.$inject = ['items', 'DataService', '$state'];
    function ShoppingListController(items, DataService, $state) {
        var ctrl = this;

        ctrl.items = items.data;
        
        ctrl.removeItem = function(item) {
            DataService.removeItemById(item.id).then(function() {
                $state.reload();
            });
        };
        
        ctrl.setBought = function(item) {
            DataService.setBought(item.id);
            $state.go('list');
        };
    }
    
})();