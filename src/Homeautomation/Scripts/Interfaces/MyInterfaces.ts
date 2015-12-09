module mytestApp.Interfaces {

    export interface ITestModelService {
        getTestModels: () => Array<ITestModel>;
    }

    export interface ITestModel {
        id: string;
        name: string;
    }
}