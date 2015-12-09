/// <reference path="../interfaces/MyInterfaces.ts" />

module mytestApp.Services {


    export class TestModelService implements mytestApp.Interfaces.ITestModelService {
        httpService: ng.IHttpService;
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getTestModels = () => {
            //For the purpose of this demo I am returning the hard coded values, hoever in real world application
            //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.

            //var test = this.httpService.get("/api/mytest/");
            //return test;

            var res: Array<mytestApp.Interfaces.ITestModel> = [
                { id: "1", name: "Test1" },
                { id: "2", name: "Test2" },
                { id: "3", name: "Test3" }
            ];
            return res;
        }
    }
    angular.module("mytestApp").service("mytestApp.Services.TestModelService", TestModelService);
} 