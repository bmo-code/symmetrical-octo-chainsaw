// en ES5
var greeting = function() {
    console.log('ES5 function');
}

greeting();

var fparam = function(arg1) {
    console.log('ES5 Arg : ' + arg1);
}

var dog = {
    name: 'chien',
    toys: ['ballon', 'balle'],
    getToys: function() {
        var self = this;
        this.toys.forEach(function(toy) {
            var sentence = self.name + 'joue avec un ' + toy;
            console.log(sentence);
        });
    }
}

dog.getToys();

// en ES6 
let arrowf = () => {
    console.log('ES6 function');
}

let arrowf2 = () => console.log('ES6 function reducted');

arrowf();
arrowf2();

let es6fparam = (arg1) => {
    console.log('ES6 Arg : ', arg1);
}

let es6dog = {
    name: 'chien',
    toys: ['ballon', 'balle'],
    getToys: function() {
        this.toys.forEach( (toy) => {
            let sentence = this.name + 'joue avec un ' + toy;
            console.log(sentence);
        });
    }
}

es6dog.getToys();