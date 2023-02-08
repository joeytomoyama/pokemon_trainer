import { Bulbasaur } from './bulbasaur.js';
import { Challenge } from './challenge.js';
import { Charmander } from './charmander.js';
const bulb = new Bulbasaur('bulb');
const lizz = new Charmander('lizz');
const chal = new Challenge(bulb, lizz);
lizz.hp = 300;
chal.print();
chal.oneAttack();
chal.print();
chal.twoAttack();
chal.print();
bulb.heal(20);
chal.print();
chal.twoAttack();
chal.print();
//# sourceMappingURL=index.js.map