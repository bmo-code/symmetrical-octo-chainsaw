let fruits = new Set();
fruits.add('pommes').add('poire').add('banane');

let fruitsIteratorEntries = fruits.entries();
console.log(fruitsIteratorEntries);
console.log(fruitsIteratorEntries.next()); // Récupère la valeur suivante

if (false === fruitsIteratorEntries.next().done) {
    console.log('Itération terminée');
} else {
    console.log(fruitsIteratorEntries.next());
}