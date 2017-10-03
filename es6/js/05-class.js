// En ES5
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

var myCar = new Car('BMW', 'Rouge');
console.log(myCar);


Car.prototype.klaxone = function() {
    console.log('tuuuuuuut');
}

myCar.klaxone();

console.log('------------------------');

// En ES6
class Vehicule {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    klaxone() {
        console.log('taaaaaaaat');
    }
}

let myVehicule = new Vehicule('Mercedes', 'Bleu');
console.log(myVehicule);

myVehicule.klaxone();

console.log('------------------------');

class VoitureDeCourse extends Vehicule {
    constructor(brand, color, vitesse) {
        super(brand, color);
        this.vitesse = vitesse;
    }
    turbo() {
        console.log('Mise en route du turbo');
    }
    klaxone() {
        console.log('tatatatat');
    }
}

let myVoitureDeCourse = new VoitureDeCourse('F1', 'Noir', '250');
console.log(myVoitureDeCourse);
myVoitureDeCourse.turbo();
myVoitureDeCourse.klaxone();