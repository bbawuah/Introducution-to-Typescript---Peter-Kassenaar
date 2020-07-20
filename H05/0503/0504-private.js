// 0503-class.ts
// Mag iemand wijzigen?
var canChange = true; // Dit door authentication service laten checken!
// 1. class definieren.
var PersonPrivate = (function () {
    function PersonPrivate(firstName, lastName, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }
    Object.defineProperty(PersonPrivate.prototype, "firstName", {
        // custom getters and setters
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (canChange && canChange === true) {
                this._firstName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonPrivate.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            if (canChange && canChange === true) {
                this._lastName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonPrivate.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (canChange && canChange === true) {
                this._email = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonPrivate;
}());
// 2. Nieuw persoon instantieren
var personPrivate = new PersonPrivate('John', 'Damen', 'john@damen.nl');
//console.log('private variable: ', personPrivate._firstName); // "Property '_firstName' is private and only accessible within class 'PersonPrivate'."
console.log('Voornaam via getter: ', personPrivate.firstName);
console.log('Voornaam instellen via setter: ', personPrivate.firstName = 'Harry');
console.log('Nieuwe voornaam via getter: ', personPrivate.firstName);
//# sourceMappingURL=0504-private.js.map