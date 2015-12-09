/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />

((): void => {
    var app = angular.module("mytestApp", []);
})();


//http://www.codeproject.com/Articles/888764/Getting-started-with-TypeScript-in-AngularJS-appli


class Greeter {
    greeting: string;
    koe: string;

    constructor(message: string) {
        this.greeting = message;
        this.koe = "jee";
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
