

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


   get imageUrl(): string {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
   }

   constructor(
      public readonly id: number,
      public name: string,
      // public imageUrl: string

   ) { }
   scream() {
      console.log(`${this.name.toUpperCase()}!!!!`)
      this.speak()
   }

   speak() {
      console.log(`${this.name} ${this.name}...`)
   }
}


export const bulbasaur = new Pokemon(1, 'Bulbasaurname')

// bulbasaur.id = 2
// bulbasaur.name = 'Bulbasaurfdsfs'

console.log(bulbasaur.imageUrl)
bulbasaur.scream()
bulbasaur.speak()