(function () {
    'use strict';

    angular
        .module('app')
        .factory('mytestService', mytestService);

    mytestService.$inject = ['$http'];

    function mytestService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();