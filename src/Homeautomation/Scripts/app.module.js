/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
(function () {
    var app = angular.module("mytestApp", []);
})();
//http://www.codeproject.com/Articles/888764/Getting-started-with-TypeScript-in-AngularJS-appli
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
        this.koe = "jee";
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
