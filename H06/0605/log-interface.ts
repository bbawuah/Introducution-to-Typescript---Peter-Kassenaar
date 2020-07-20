// Hier wordt 'Logging2' gebruikt, omdat in directory /0604 al de namespace 'Logging'
// aanwezig is. Anders zou deze namespace uiteraard ook gewoon 'Logging' heten.
namespace Logging2{
	export  interface LoggingMessage {
		log(msg: string): void
	}
}
