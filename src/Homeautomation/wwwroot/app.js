var mytestApp;!function(a){var b;!function(a){var b=function(){function a(a){var b=this;this.getTestModels=function(){b.testmodels=b.testmodelService.getTestModels()},this.testmodelService=a}return a.$inject=["mytestApp.Services.TestModelService"],a}();a.MytestController=b}(b=a.Controllers||(a.Controllers={}))}(mytestApp||(mytestApp={}));var mytestApp;!function(a){var b;!function(a){var b=function(){function a(a){this.getTestModels=function(){var a=[{id:"1",name:"Test1"},{id:"2",name:"Test2"},{id:"3",name:"Test3"}];return a},this.httpService=a}return a.$inject=["$http"],a}();a.TestModelService=b,angular.module("mytestApp").service("mytestApp.Services.TestModelService",b)}(b=a.Services||(a.Services={}))}(mytestApp||(mytestApp={})),function(){angular.module("mytestApp",[])}();var Greeter=function(){function a(a){this.greeting=a,this.koe="jee"}return a.prototype.greet=function(){return"Hello, "+this.greeting},a}();