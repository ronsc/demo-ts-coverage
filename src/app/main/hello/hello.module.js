var hello;
(function (hello) {
    var Config = (function () {
        function Config() {
        }
        return Config;
    }());
    angular
        .module('hello', [])
        .config(Config);
})(hello || (hello = {}));

//# sourceMappingURL=hello.module.js.map
