///<reference path="log-interface.ts" />
// log-error.ts
var Logging2;
(function (Logging2) {
    var LogError = (function () {
        function LogError() {
        }
        LogError.prototype.log = function (msg) {
            var now = new Date().toLocaleTimeString();
            console.error("(" + now + ") - " + msg);
        };
        return LogError;
    }());
    Logging2.LogError = LogError;
})(Logging2 || (Logging2 = {}));
//# sourceMappingURL=log-error.js.map