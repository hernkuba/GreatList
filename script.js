const person = {
    namee: "Jakub",
    surname: "Szewc",
    age: 19,
    parent: {
        namee: "Jaro",
        surname: "BarProp",
    },
    sayHello: function() {
        console.log(`Czesc! Jestem ${this.namee} ${this.surname} i mam ${this.age} lat`);
    },
    getFullName: function() {
        return `${this.age} ${this.namee}`
    }
}
const person1 = {
    namee: "Franek",
    surname: "Szewc",
    age: 19,
    sayHello: function() {
        console.log(`Czesc! Jestem ${this.namee} ${this.surname} i mam ${this.age} lat`);
    },
    getFullName: function() {
        return `${this.age} ${this.namee}`
    }
}
console.log(person);