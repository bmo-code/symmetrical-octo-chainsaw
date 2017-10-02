let brands = new Set();

brands.add('honda')
    .add('ducati')
    .add('honda')
    .add('kawazaki');

console.log(brands);

let brandsArray = ['honda', 'ducati', 'triomph', 'ducati'];
let brands2 = new Set(brandsArray);

console.log(brands2);

// La méthode HAS renvoit true ou false si elle trouve ou non la valeur
console.log(brands.has('honda')); // Renvoit TRUE

// La méthode DELETE renvoit true ou false si elle trouve ou non la valeur et la supprime si true
console.log(brands.delete('honda')); // Renvoit TRUE et supprime
console.log(brands.delete('mustang')); // Renvoit FALSE et ne supprime pas

// La méthode FOREACH permet de lister un SET
brands.forEach(function(val1, val2, val3) {
    console.log(val1); // CLE
    console.log(val2); // VALEUR
    console.log(val3); // LA FONCTION
}); 

