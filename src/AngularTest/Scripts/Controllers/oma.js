(function () {
    'use strict';
    angular
        .module('mytestApp')
        .controller('MyCtrl', myCtrl);

    myCtrl.$inject = ['$scope'];

    $scope.firstName = "John",
    $scope.lastName = "Doe",
    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    };

})();

