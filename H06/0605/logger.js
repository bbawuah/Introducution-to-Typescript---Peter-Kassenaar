///<reference path="log-interface.ts" />
///<reference path="log-general.ts" />
///<reference path="log-error.ts" />
// logger.ts
var myLoggerNS = new Logging2.LogGeneral();
var myErrorNS = new Logging2.LogError();
console.group('Namespace');
myLoggerNS.log('Algemene melding vanuit de namespace');
myErrorNS.log('Foutmeldingmelding vanuit de namespace');
console.groupEnd();
//# sourceMappingURL=logger.js.map