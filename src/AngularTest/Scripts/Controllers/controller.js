(function () {
    'use strict';

    angular
        .module('mytestApp')
        .controller('mytestController', controller);

    controller.$inject = ['$scope']; 

    function controller($scope) {
        $scope.title = 'controller';

        activate();

        function activate() { }
    }
})();
