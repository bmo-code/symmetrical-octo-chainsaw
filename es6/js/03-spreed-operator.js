// En ES5
var fruits = ['bananes', 'pommes'];
var vegetables = ['poireaux', 'carottes']; 

var food = [fruits, vegetables];
// On obtient un tableau à 2 dimensions.

let food2 = [...fruits, ...vegetables];
// On opbtient un tableau à 1 dimensions avec les 4 valeurs.

let food3 = [...fruits, ...vegetables, 'navets'];
// On peut aussi combiner avec des nouveaux strings.

// Pour les fonctions
// En ES5
var mixer = function(ing1, ing2) {
    console.log(ing1 + ' avec ' + ing2);
}
mixer('banane', 'poire');

//En ES6
let mixer2 = (ing1, ing2) => console.log(ing1 + ' avec ' + ing2);
mixer2('banane', 'poire');
mixer2(...vegetables);

let mixer3 = (...args) => console.log(args.join('-'));
mixer3([...fruits, ...vegetables]);