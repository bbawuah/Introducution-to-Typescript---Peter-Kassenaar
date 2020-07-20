///<reference path="log-interface.ts" />
// log-error.ts
namespace Logging2 {
	export class LogError implements LoggingMessage {
		log(msg: string) {
			let now = new Date().toLocaleTimeString();
			console.error(`(${now}) - ${msg}`);
		}
	}
}

