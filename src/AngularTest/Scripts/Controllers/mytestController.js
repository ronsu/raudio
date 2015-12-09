(function () {
    'use strict';
    angular
        .module('mytestApp')
        .controller('mytestController', mytestController);

    mytestController.$inject = ['$scope', 'TestModels'];

    function mytestController($scope, TestModels)
    {
        $scope.TestModels = TestModels.query();
    }

})();


