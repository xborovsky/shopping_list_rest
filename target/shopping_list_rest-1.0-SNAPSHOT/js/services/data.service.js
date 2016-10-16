(function() {
    
    'use strict';
    
    angular.module('Data')
        .constant('restEndpoint', 'http://localhost:8080/shopping_list_rest/rest')
        .service('DataService', DataService);
    
    DataService.$inject = ['$http', 'restEndpoint'];
    function DataService($http, restEndpoint) {
        var service = this;

        service.getItems = function() {
            return $http.get(restEndpoint + '/shoppingList')
                .success(function(data) {
                    return data;
                }).error(function() {
                    console.log('Could not read data from data source!');
                });
        };
        
        service.addItem = function(item) {
            return $http.put(restEndpoint + '/shoppingList/item', item)
                .success(function() {
                    console.log('success');
                }).error(function() {
                    console.log('addItem error');         
                });
        };
        
        service.removeItemById = function(id) {
            return $http.delete(restEndpoint + '/shoppingList/item', {params : {id : id}})
                .success(function() {
                    console.log('success');
                }).error(function() {
                    console.log('removeItemById error');
                });
        };
        
        service.setBought = function(id) {
            var item = service.findItemById(id);
            item.bought = !item.bought;
        };
        
        service.findItemById = function(id) {
            return $http.get(restEndpoint + '/shoppingList/item', {params : {id : id}})
                .success(function(data) {
                    return data;
                }).error(function() {
                    console.log('could find item by id');
                });
        };
        
        service.updateItem = function(item) {
            console.log(item);
            return $http.post(restEndpoint + '/shoppingList/item', JSON.stringify(item))
                .success(function() {
                    console.log('update success');
                }).error(function() {
                    console.log('update error');
                });
        };
    }
    
})();