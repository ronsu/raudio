/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../Interfaces/MyInterfaces.ts" />
var mytestApp;
(function (mytestApp) {
    var Controllers;
    (function (Controllers) {
        var MytestController = (function () {
            function MytestController(testmodelService) {
                var _this = this;
                this.getTestModels = function () {
                    _this.testmodels = _this.testmodelService.getTestModels();
                };
                this.testmodelService = testmodelService;
            }
            MytestController.$inject = ["mytestApp.Services.TestModelService"];
            return MytestController;
        })();
        Controllers.MytestController = MytestController;
        angular.module("mytestApp").controller("mytestApp.Controllers.mytestController", MytestController);
    })(Controllers = mytestApp.Controllers || (mytestApp.Controllers = {}));
})(mytestApp || (mytestApp = {}));
