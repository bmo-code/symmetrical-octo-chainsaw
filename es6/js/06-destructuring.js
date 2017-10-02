// En ES5
var fruits = ['fraise', 'banane', 'poire', 'pomme'];
console.log(fruits[0]);
console.log(fruits[2]);

// En ES6
let [strawberry,,,apple] = ['fraise', 'banane', 'poire', 'pomme'];
console.log(strawberry);
console.log(apple);

let [a,,,b] = [...fruits];
console.log(a, b);

// En ES5
var dog = {
    name: 'chien',
    age: 1,
    color: 'noir'
}

console.log(dog.age, dog.color);

let {name, color} = {
    name: 'chien',
    age: 1,
    color: 'noir'
}

console.log(name, color);