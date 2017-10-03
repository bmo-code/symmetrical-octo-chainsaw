// http://reactivex.io/documentation/operators.html

let Observable = Rx.Observable;

// Create observable with method OF
let values = Observable.of('Hello', 'World', 2017);

// Souscription
values.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('complete !')
);

// L'operateur of crée un observable qui emet toutes les valeurs
// passées en arguments les unes après les autres et qui termine
// par emetre une notification pour le complete

// Créer un observable à partir d'un tableau avec l'operator FROM
let fruitsArray = ['pomme', 'banane', 'fraise'];
let fruitsObservable = Observable.from(fruitsArray);

fruitsObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed !')
);

// Créer un observable avec l'operator FROM depuis une promise
// on va utiliserl'api github pour récupérer les emojis
let url = 'https://api.github.com/emojis';
let emojisObservable = Observable.from($.getJSON(url));

emojisObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed !')
);