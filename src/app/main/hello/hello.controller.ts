module hello {

    /**
     * HelloController
     */
    class HelloController {
        constructor() { }
    }

    angular
        .module('hello')
        .controller('HelloController', HelloController);
}