/// <reference path="../interfaces/MyInterfaces.ts" />
var mytestApp;
(function (mytestApp) {
    var Services;
    (function (Services) {
        var TestModelService = (function () {
            function TestModelService($http) {
                this.getTestModels = function () {
                    //For the purpose of this demo I am returning the hard coded values, hoever in real world application
                    //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
                    //var test = this.httpService.get("/api/mytest/");
                    //return test;
                    var res = [
                        { id: "1", name: "Test1" },
                        { id: "2", name: "Test2" },
                        { id: "3", name: "Test3" }
                    ];
                    return res;
                };
                this.httpService = $http;
            }
            TestModelService.$inject = ["$http"];
            return TestModelService;
        })();
        Services.TestModelService = TestModelService;
        angular.module("mytestApp").service("mytestApp.Services.TestModelService", TestModelService);
    })(Services = mytestApp.Services || (mytestApp.Services = {}));
})(mytestApp || (mytestApp = {}));
