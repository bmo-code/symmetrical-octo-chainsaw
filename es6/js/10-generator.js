// Permet de créer des fonctions que l'on peut mettre en pause
// On peut faire repartir la fonction à l'endroit où on s'était arreté

function* misc() {
    let a = 10;
    let b = 15;
    console.log(a + b);
    yield;
    console.log('Deuxième exécution lancéé');
    yield;
    console.log('Troisième exécution lancée');
}
// La fonction retourne un generator

let miscIterator = misc();

miscIterator.next(); // Affiche 25;
miscIterator.next(); // Affiche 'Deuxième exécution lancéé';
miscIterator.next(); // Affiche 'Troisième exécution lancéé';

function* decollage() {
    yield 'Trois';
    yield 'Deux';
    yield 'Un';
    yield 'Décollage';
}

let monIterator = decollage();

let handle = setInterval(() => {
    let instruction = monIterator.next();
    if (instruction.done) {
        clearInterval(handle);
    } else {
        console.log(instruction);
    }
}, 2000);