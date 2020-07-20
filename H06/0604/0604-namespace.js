// 2. algemene class voor loggen.
var LogGeneral = (function () {
    function LogGeneral() {
    }
    LogGeneral.prototype.log = function (msg) {
        var now = new Date().toLocaleTimeString();
        console.log("(" + now + ") - " + msg);
    };
    return LogGeneral;
}());
// 3. class voor loggen van fouten
var LogError = (function () {
    function LogError() {
    }
    LogError.prototype.log = function (msg) {
        var now = new Date().toLocaleTimeString();
        console.error("(" + now + ") - " + msg);
    };
    return LogError;
}());
// 4. Enkele Voorbeelden
console.group('Algemeen');
var myLogger = new LogGeneral();
var myErrorLogger = new LogError();
myLogger.log('Dit is een algemeen bericht');
myErrorLogger.log('Dit is een foutmelding');
console.groupEnd();
//**************************
// 5. Netter: bij elkaar horende functionaliteit groeperen in een namespacs
//**************************
var Logging;
(function (Logging) {
    // 6. Namespace class voor loggen.
    var LogGeneral = (function () {
        function LogGeneral() {
        }
        LogGeneral.prototype.log = function (msg) {
            var now = new Date().toLocaleTimeString();
            console.log("(" + now + ") - " + msg);
        };
        return LogGeneral;
    }());
    Logging.LogGeneral = LogGeneral;
    // 7. Namespace class voor loggen van fouten
    var LogError = (function () {
        function LogError() {
        }
        LogError.prototype.log = function (msg) {
            var now = new Date().toLocaleTimeString();
            console.error("(" + now + ") - " + msg);
        };
        return LogError;
    }());
    Logging.LogError = LogError;
})(Logging || (Logging = {}));
// 8. Gebruik van de namespace.
var myLoggerNS = new Logging.LogGeneral();
var myErrorNS = new Logging.LogError();
console.group('Namespace');
myLoggerNS.log('Algemene melding vanuit de namespace');
myErrorNS.log('Foutmeldingmelding vanuit de namespace');
console.groupEnd();
//# sourceMappingURL=0604-namespace.js.map