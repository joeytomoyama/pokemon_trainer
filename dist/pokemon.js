export class Pokemon {
    constructor(name, species, type, hp, dmgPoints) {
        this.name = name;
        this.species = species;
        this.type = type;
        this.hp = hp;
        this.dmgPoints = dmgPoints;
    }
    takeDmg(dmgAmount) {
        this.hp -= dmgAmount;
    }
    heal(healAmount) {
        this.hp += healAmount;
    }
    toString() {
        return `Name: ${this.name}, Species: ${this.species}, Type: ${this.type}, HP: ${this.hp}`;
    }
    print() {
        console.log(this.toString());
    }
}
//# sourceMappingURL=pokemon.js.map