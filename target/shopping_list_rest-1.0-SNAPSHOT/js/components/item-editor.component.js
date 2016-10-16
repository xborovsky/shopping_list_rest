(function() {
    
    'use strict';
    
    angular.module('ShoppingListApp')
        .component('itemEditor', {
            bindings : {
                item : '<',
                onSave : '&'
            },
            templateUrl : 'templates/item-edit.template.html'
    });
    
})();