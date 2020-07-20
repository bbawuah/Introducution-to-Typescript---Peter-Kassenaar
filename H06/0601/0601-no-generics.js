// 1. Algemene echo functie. Ontvangt een string, retourneert een string.
function echo(arg) {
    return arg;
}
console.log(echo('Hello world'));
// 2. Wat nu als we ook nummers willen retourneren? Dan
// twee functies schrijven. Dit zorgt wel voor duplicatie van code.
function echoString(arg) {
    return arg;
}
function echoNumber(arg) {
    return arg;
}
console.log(echoString('Hello world'));
console.log(echoNumber(1000));
//3. andere oplossing, type 'any' gebruiken
// Dit maakt de code echter weer minder specifiek, omdat
// we de voordelen van het aangegeven van een specifiek type verliezen.
function echoAny(arg) {
    return arg;
}
console.log(echoAny('Hello world')); // prima
console.log(echoAny(2000)); // prima
function echoGeneric(arg) {
    return arg;
}
console.log(echoGeneric('Hello Generic')); // prima
console.log(echoGeneric(3000)); // prima
// 4. resultaat toekennen aan variabele
var output = echoGeneric('Hello String');
console.log(typeof output); // string
// 5. Uitgebreider, lijsten bijhouden.
// Lijsten bijhouden, 'normale' manier
// Declaraties in losse variabelen
var numberArray = [];
var namesArray = [];
// Arrays vullen
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
namesArray.push('Jan');
namesArray.push('Ferdinand');
namesArray.push('Sasha');
// 3. Arrays in de console loggen
console.group('Numbers');
numberArray.forEach(function (n) { return console.log(n); });
console.groupEnd();
console.group('Names');
namesArray.forEach(function (n) { return console.log(n); });
console.groupEnd();
//# sourceMappingURL=0601-no-generics.js.map