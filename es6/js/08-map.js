let books = new Map();

books.set('Umberto Eco', 'Le nom de la rose');
books.set('Michel Tournier', 'Le roi des Aulnes');

console.log(books);
console.log(books.size); // Retourne la taille de la map
console.log(books.get('Umberto Eco')); // Retourne la valeur associé à la clef

books.forEach(function(val1, val2, val3) {
    console.log(val1); // CLE
    console.log(val2); // VALEUR
    console.log(val3); // LA MAP ELLE-MEME
}); 

console.log(books.keys());
console.log(books.values());
console.log(books.entries());
