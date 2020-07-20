// 0507-tuple-enum.ts

// Tuple
//
// declareer een tuple type
let persoon: [string, string, number];

// initialiseer
persoon=['Peter', 'Kassenaar', 10]; // OK.

// Niet volgens de regels van het Tuple Type
// persoon=['Peter', 10, 'Kassenaar']; // Error

// Enum
//
enum Color { Red, Green, Blue, Violet, Black}
let myColor:Color = Color.Green;
console.log(myColor); // 1
let colorName:string = Color[3];
console.log(colorName);

// Casting, of Type Assertion
// Stel dat een callbackfunctie wordt aangeroepen die
// data uit een database krijgt. Dan kunt u deze expliciet casten
// naar het betreffende type:
//
// (data) => {
// 	let person: Person = <Person>data;
// }