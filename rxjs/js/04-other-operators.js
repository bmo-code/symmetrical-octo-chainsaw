let Observable = Rx.Observable;

let interval = 
    Observable.interval(500) // Observable qui emet toutes les 500ms
            .map(x => x * 10)
            .take(10); // Operator qui termine l'émission aporès 10 itérations

interval.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed !')
);

var numbers = [0,1,2,3,4];
console.log(numbers.map(x => x * 10));

let myString = "Aujourd'hui on voit les Observables avec RxJS";
let timer = 
    Observable.timer(3000, 100) // Arg1 = delais, Arg2 = interval
            .do(x => console.log('avant map', x))
            .map(x => myString[x])
            .do(x => console.log('après map', x))    
            .take(myString.length);

let container = document.querySelector('#container');
timer.subscribe(
    (data) => container.innerHTML += data,
    (error) => console.log('Error', error),
    () => console.log('completed !')
);