console.log('Je vais à une formation Angular');
let promise = new Promise( (resole, reject) => {
    setTimeout(() => {
        let message = 'bravo vous êtes reçu';
        resole(message);
        //reject('ERROR');
    }, 2000);
});
console.log('Je sors de cette formation');

promise.then( (data) => {
    console.log(data);
});