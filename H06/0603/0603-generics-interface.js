var Creator = (function () {
    function Creator() {
    }
    Creator.prototype.create = function (type) {
        this.creature = type;
        return type;
    };
    Creator.prototype.getCreature = function () {
        return this.creature;
    };
    return Creator;
}());




// 3. Declaraties in losse variabelen
var person = new Creator();
var pet = new Creator();
person.create({ name: 'Jochem', age: 18 });
pet.create({ name: 'Bonzo', isSweet: true });
console.log(person.getCreature());
//# sourceMappingURL=0603-generics-interface.js.map