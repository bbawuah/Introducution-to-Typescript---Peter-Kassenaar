// 0507-tuple-enum.ts
// Tuple
//
// declareer een tuple type
var persoon;
// initialiseer
persoon = ['Peter', 'Kassenaar', 10]; // OK.
// Niet volgens de regels van het Tuple Type
// persoon=['Peter', 10, 'Kassenaar']; // Error
// Enum
//
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Violet"] = 3] = "Violet";
    Color[Color["Black"] = 4] = "Black";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // 1
var colorName = Color[3];
console.log(colorName);
// Casting, of Type Assertion
// Stel dat een callbackfunctie wordt aangeroepen die
// data uit een database krijgt. Dan kunt u deze expliciet casten
// naar het betreffende type:
//
// (data) => {
// 	let person: Person = <Person>data;
// } 
//# sourceMappingURL=0507-tuple-enum.js.map