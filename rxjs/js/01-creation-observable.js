let Observable = Rx.Observable;

// Create observable
let values = Observable.create((observer) => {
    observer.next('Hello');
    observer.next('World');
    setTimeout(() => console.log('Hello les amis !'), 2000);
});

values.subscribe((data) => console.log(data));

// Le next() push les données 
// Le subscribne pull les données