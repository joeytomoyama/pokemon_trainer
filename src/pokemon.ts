export class Pokemon {
    name: string
    species: string
    type: string
    hp: number
    dmgPoints: number

    constructor(name: string, species: string, type: string, hp: number, dmgPoints: number) {
        this.name = name
        this.species = species
        this.type = type
        this.hp = hp
        this.dmgPoints = dmgPoints
    }

    takeDmg(dmgAmount: number) {
        this.hp -= dmgAmount
    }

    heal(healAmount: number) {
        this.hp += healAmount
    }

    toString(): string {
        return `Name: ${this.name}, Species: ${this.species}, Type: ${this.type}, HP: ${this.hp}`
    }

    print() {
        console.log(this.toString())
    }
}