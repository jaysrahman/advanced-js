class Caracter {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eat(feed) {
        this.energy += feed;
        return `Happy to eat ${this.name}`;
    }

    play(hour) {
        this.energy -= hour;
        return `Happy to play ${this.name}`;
    }

    sleep(hour) {
        this.energy += hour * 2;
        return `Happy to sleep ${this.name}`;
    }
}

let jays = new Caracter('Jays Rahman Elfaiz', 10);
let munawir = new Caracter('Munawir Ahmad Muhtadi', 15);
console.log(jays);