// 0506-type-inference.ts

//1.  Geen type opgegeven, maar afgeleide type van x is number
let x = 10;
console.log('Type van x: ', typeof  x); // number
// x = 'hello'; // error TS2322: Type '"hello"' is not assignable to type 'number'.


// 2. Contextual typing
window.onmousedown = function (event) {
	//console.log(event.buton);  //<- Error, want 'buton' bestaat niet op type mouseEvent (wel 'button', wat we waarschijnlijk bedoelden)
};

// 3. Overrulen, door type any te gebruiken.
let y: any = 10;
y          = 'hello'; // prima
console.log(y); // hello
window.onmousedown = function (event: any) {
	console.log(event.buton);  // Prima, al zal 'undefined' worden geretourneerd
};

// 4. NoImplicitAny
// class NoMoreAny {
// 	public name; // error TS7008: Member 'name' implicitly has an 'any' type.
//
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }