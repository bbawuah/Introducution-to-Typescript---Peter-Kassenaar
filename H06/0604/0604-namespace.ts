// 1. algemene interface voor loggen van berichten
interface LoggingMessage {
	log(msg: string): void
}

// 2. algemene class voor loggen.
class LogGeneral implements LoggingMessage {
	log(msg: string) {
		let now = new Date().toLocaleTimeString();
		console.log(`(${now}) - ${msg}`);
	}
}

// 3. class voor loggen van fouten
class LogError implements LoggingMessage {
	log(msg: string) {
		let now = new Date().toLocaleTimeString();
		console.error(`(${now}) - ${msg}`);
	}
}

// 4. Enkele Voorbeelden
console.group('Algemeen');
let myLogger      = new LogGeneral();
let myErrorLogger = new LogError();
myLogger.log('Dit is een algemeen bericht');
myErrorLogger.log('Dit is een foutmelding');
console.groupEnd();

//**************************
// 5. Netter: bij elkaar horende functionaliteit groeperen in een namespacs
//**************************
namespace Logging {
	// interne interface
	interface LoggingMessage {
		log(msg: string): void
	}

	// 6. Namespace class voor loggen.
	export class LogGeneral implements LoggingMessage {
		log(msg: string) {
			let now = new Date().toLocaleTimeString();
			console.log(`(${now}) - ${msg}`);
		}
	}

	// 7. Namespace class voor loggen van fouten
	export class LogError implements LoggingMessage {
		log(msg: string) {
			let now = new Date().toLocaleTimeString();
			console.error(`(${now}) - ${msg}`);
		}
	}
}

// 8. Gebruik van de namespace.
let myLoggerNS = new Logging.LogGeneral();
let myErrorNS  = new Logging.LogError();
console.group('Namespace');
myLoggerNS.log('Algemene melding vanuit de namespace');
myErrorNS.log('Foutmeldingmelding vanuit de namespace');
console.groupEnd();
