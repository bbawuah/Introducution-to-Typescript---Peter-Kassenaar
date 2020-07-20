// 0503-class.ts
// 1. class definieren.
var Person = (function () {
    function Person(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
// 2. Nieuw persoon instantieren
var person = new Person('Peter', 'Kassenaar', 'info@kassenaar.com');
console.log('Persoon via class: ', person.fullName());
// 3. class definieren met shorthand notation.
var PersonShorthand = (function () {
    function PersonShorthand(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    PersonShorthand.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return PersonShorthand;
}());
// 4. Nieuw persoon instantieren op basis van shorthand notatie
var personShorthand = new PersonShorthand('Wytze', 'Hellinga', 'wytze@hellinga.nl');
console.log('Persoon via shorthand notatie: ', personShorthand.fullName());
// 5. Naam aanpassen
personShorthand.firstName = 'Henk';
personShorthand.lastName = 'De Vries';
console.log('Persoon via shorthand notatie: ', personShorthand.fullName());
//# sourceMappingURL=0503-class.js.map