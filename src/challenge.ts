import { Pokemon } from "./pokemon.js";

export class Challenge {
    pokemon_one: Pokemon
    pokemon_two: Pokemon

    constructor(pokemon_one: Pokemon, pokemon_two: Pokemon) {
        this.pokemon_one = pokemon_one
        this.pokemon_two = pokemon_two
    }

    oneAttack() {
        this.pokemon_two.takeDmg(this.pokemon_one.dmgPoints)
    }

    twoAttack() {
        this.pokemon_one.takeDmg(this.pokemon_two.dmgPoints)
    }

    toString(): string {
        return `Pokemon1: ${this.pokemon_one.toString()}\n` + 
        `Pokemon2: ${this.pokemon_two.toString()}`
    }

    print() {
        console.log(this.toString())
    }
}