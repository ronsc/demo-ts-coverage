module hello {

    /**
     * Config
     */
    class Config {
        constructor() {
            
        }
    }

    angular
        .module('hello', [])
        .config(Config);
}