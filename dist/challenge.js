export class Challenge {
    constructor(pokemon_one, pokemon_two) {
        this.pokemon_one = pokemon_one;
        this.pokemon_two = pokemon_two;
    }
    oneAttack() {
        this.pokemon_two.takeDmg(this.pokemon_one.dmgPoints);
    }
    twoAttack() {
        this.pokemon_one.takeDmg(this.pokemon_two.dmgPoints);
    }
    toString() {
        return `Pokemon1: ${this.pokemon_one.toString()}\n` +
            `Pokemon2: ${this.pokemon_two.toString()}`;
    }
    print() {
        console.log(this.toString());
    }
}
//# sourceMappingURL=challenge.js.map