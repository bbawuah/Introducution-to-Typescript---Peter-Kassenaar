// 1. Twee interfaces definieren
interface Person {
	name: string;
	age: number;
}

interface Animal {
	name: string;
	isSweet: boolean;
}

// 2. Algemene 'maak' functie voor objecten
class Creator<T> {
	creature: T;

	create(type: T): T {
		this.creature = type;
		return type;
	}

	getCreature(): T {
		return this.creature;
	}

	// overige algemene methodes
}

// 3. Declaraties in losse variabelen
let person = new Creator<Person>();
let pet    = new Creator<Animal>();

person.create({name: 'Jochem', age: 18});
pet.create({name: 'Bonzo', isSweet: true});

console.log(person.getCreature());