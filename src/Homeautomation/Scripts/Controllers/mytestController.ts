/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../Interfaces/MyInterfaces.ts" />
module mytestApp.Controllers {

    export class MytestController {
        testmodelService: mytestApp.Interfaces.ITestModelService;
        static $inject = ["mytestApp.Services.TestModelService"];

        constructor(testmodelService: mytestApp.Interfaces.ITestModelService) {
            this.testmodelService = testmodelService;
        }

        testmodels: Array<mytestApp.Interfaces.ITestModel>;

        getTestModels = () => {
            this.testmodels = this.testmodelService.getTestModels();
        }

    }
}
