// Default parameters in ES6

// ES5 : geen standaardwaarden voor parameters mogelijk.
// Vaak daarom - type- en valuechecking binnen de functie.
function addES5(x, y) {
	x = x || 0;
	y = y || 0;
	return x + y;
}

// ES6: de parameters x en y hebben een standaardwaarde
function addES6(x = 0, y = 0) {
	return x + y;
}

// invoking:
console.log(addES5(10, 10));// 20
console.log(addES5());		// 0, Indien we niet aan parameterchecking hadden gedaan zou NaN zijn geretourneerd.
console.log(addES6(20, 20));// 40
console.log(addES6());		// 0
