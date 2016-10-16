(function() {
    
    'use strict';
    
    angular.module('ShoppingListApp')
        .component('items', {
            bindings : {
                items : '<',
                onRemove : '&',
                setBought : '&'
            },
            templateUrl : 'templates/items.template.html'
    });
    
})();