///<reference path="log-interface.ts" />
///<reference path="log-general.ts" />
///<reference path="log-error.ts" />

// logger.ts - IMPLEMENTATIE.
let myLoggerNS = new Logging2.LogGeneral();
let myErrorNS  = new Logging2.LogError();
console.group('Namespace');
myLoggerNS.log('Via gecombineerde bestanden - Algemene melding vanuit de namespace');
myErrorNS.log('Via gecombineerde bestanden - Foutmeldingmelding vanuit de namespace');
console.groupEnd();