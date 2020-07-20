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
///<reference path="log-interface.ts" />
///<reference path="log-general.ts" />
///<reference path="log-error.ts" />
// logger.ts - IMPLEMENTATIE.
var myLoggerNS = new Logging2.LogGeneral();
var myErrorNS = new Logging2.LogError();
console.group('Namespace');
myLoggerNS.log('Via gecombineerde bestanden - Algemene melding vanuit de namespace');
myErrorNS.log('Via gecombineerde bestanden - Foutmeldingmelding vanuit de namespace');
console.groupEnd();
//# sourceMappingURL=log-complete.js.map