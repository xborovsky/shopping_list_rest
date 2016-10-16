(function() {
    
    'use strict';
    
    angular.module('ShoppingListApp')
        .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('list');
        
        $stateProvider
            .state('list', {
                url : '/list',
                template : '<items items="listCtrl.items" on-remove="listCtrl.removeItem({id : id})" set-bought="listCtrl.setBought({id : id})"></items>',
                resolve : {
                    items : ['DataService', function(DataService) {
                        return DataService.getItems();
                    }]
                },
                controller : 'ShoppingListController as listCtrl'
            })
            .state('newItem', {
                url : '/edit',
                template : '<item-editor item="editCtrl.item" on-save="editCtrl.saveItem()"></item-editor>',
                resolve : {
                    item : function() {
                        return null;
                    }
                },
                controller : 'ItemEditorController as editCtrl'
            })
            .state('editItem', {
                url : '/edit/:id',
                template : '<item-editor item="editCtrl.item" on-save="editCtrl.saveItem()"></item-editor>',
                resolve : {
                    item : ['DataService', '$stateParams', function(DataService, $stateParams) {
                        return DataService.findItemById($stateParams.id);
                    }]
                },
                controller : 'ItemEditorController as editCtrl'
            });
    }
    
})();