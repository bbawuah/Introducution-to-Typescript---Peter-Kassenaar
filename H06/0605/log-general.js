///<reference path="log-interface.ts" />
// log-general.ts
var Logging2;
(function (Logging2) {
    var LogGeneral = (function () {
        function LogGeneral() {
        }
        LogGeneral.prototype.log = function (msg) {
            var now = new Date().toLocaleTimeString();
            console.log("(" + now + ") - " + msg);
        };
        return LogGeneral;
    }());
    Logging2.LogGeneral = LogGeneral;
})(Logging2 || (Logging2 = {}));
//# sourceMappingURL=log-general.js.map