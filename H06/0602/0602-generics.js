// Lijsten bijhouden in een algemene 'generic'list
var List = (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    List.prototype.getItems = function () {
        return this.items;
    };
    return List;
}());
// 1. Declaraties in losse variabelen
var numberArray = new List();
var namesArray = new List();
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
    .forEach(function (n) { return console.log(n); });
console.groupEnd();
console.group('Generic Names');
namesArray.getItems()
    .forEach(function (n) { return console.log(n); });
console.groupEnd();
//# sourceMappingURL=0602-generics.js.map