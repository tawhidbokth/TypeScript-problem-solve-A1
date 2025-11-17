"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    if (typeof value === 'boolean') {
        return !value;
    }
    return value;
}
function getLength(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name} Age: ${this.age}`;
    }
}
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
console.log(filterByRating(books));
//# sourceMappingURL=solution.js.map