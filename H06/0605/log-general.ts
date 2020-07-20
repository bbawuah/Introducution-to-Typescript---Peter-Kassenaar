///<reference path="log-interface.ts" />
// log-general.ts
namespace Logging2 {
	export class LogGeneral implements LoggingMessage {
		log(msg: string) {
			let now = new Date().toLocaleTimeString();
			console.log(`(${now}) - ${msg}`);
		}
	}
}
