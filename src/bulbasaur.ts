import { Pokemon } from "./pokemon.js";

export class Bulbasaur extends Pokemon {
    
    constructor(name: string) {
        super(name, 'Bulbasaur', 'Water', 100, 20)
    }
}