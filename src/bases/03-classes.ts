

// export class Pokemon {
//    public id: number;
//    public name: string;

import { charmander } from "./02-objects"

//    constructor(id: number, name: string) {

//       this.id = id;
//       this.name = name;

//       console.log('constructor llamado')

//    }

// }

export class Pokemon {
   constructor(
      public readonly id: number,
      public name: string
   ) { }
}


export const bulbasaur = new Pokemon(1, 'Bulbasaurname')

bulbasaur.id = 2
bulbasaur.name = 'Bulbasaurfdsfs'