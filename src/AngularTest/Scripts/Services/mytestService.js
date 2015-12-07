

(function () {
    'use strict';

    var mytestService = angular.module('mytestService', ['ngResource']);

    mytestService.factory('TestModels', ['$resource',
      function ($resource) {
          return $resource('/api/mytest/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);

})();


//(function () {
//    'use strict';

//    angular
//        .module('app')
//        .factory('mytestService', mytestService);

//    mytestService.$inject = ['$http'];

//    function mytestService($http) {
//        var service = {
//            getData: getData
//        };

//        return service;

//        function getData() { }
//    }
//})();