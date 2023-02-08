import { Pokemon } from "./pokemon.js";

export class Charmander extends Pokemon {
    
    constructor(name: string) {
        super(name, 'Charmander', 'Fire', 90, 30)
    }
}