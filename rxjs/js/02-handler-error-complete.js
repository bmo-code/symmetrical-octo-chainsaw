let Observable = Rx.Observable;

// Create observable
let values = Observable.create((observer) => {
    try {
        observer.next('Hello');
        observer.next('World');
        observer.complete();
    } catch(e) {
        observer.error(e);
    }
});

values.subscribe(
    // On récupère les données
    (data) => console.log(data),
    // On récupère les erreurs
    (error) => console.log(error),
    // Quand la fonction est complete
    () => console.log('completed !')
);

// Le next() push les données 
// Le subscribne pull les données