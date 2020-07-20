// Lijsten bijhouden in een algemene 'generic'list

class List<T> {
	private items: T[] = [];

	add(item: T) {
		this.items.push(item);
	}

	getItems(): T[] {
		return this.items;
	}
}

// 1. Declaraties in losse variabelen
let numberArray = new List<number>();
let namesArray  = new List<string>();

// 2. Arrays vullen
numberArray.add(10);
numberArray.add(20);
numberArray.add(30);

namesArray.add('Roos');
namesArray.add('Marianne');
namesArray.add('Ruben');

// 3. Arrays in de console loggen
console.group('Generic Numbers');
numberArray.getItems()
	.forEach((n) => console.log(n));
console.groupEnd();
console.group('Generic Names');
namesArray.getItems()
	.forEach((n) => console.log(n));
console.groupEnd();
