var hello;
(function (hello) {
    var HelloController = (function () {
        function HelloController() {
        }
        return HelloController;
    }());
    angular
        .module('hello')
        .controller('HelloController', HelloController);
})(hello || (hello = {}));

//# sourceMappingURL=hello.controller.js.map
