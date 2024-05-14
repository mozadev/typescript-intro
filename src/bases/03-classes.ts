

// export class Pokemon {
//    public id: number;
//    public name: string;

import axios from "axios"


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

   async getMoves() {
      //const moves = 10;
      // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
      // console.log(resp.data.moves);

      // return resp.data.moves;
      // destructuring
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      console.log(data.moves);
      return data.moves;
   }
}


export const bulbasaur = new Pokemon(1, 'Bulbasaurname')

// bulbasaur.id = 2
// bulbasaur.name = 'Bulbasaurfdsfs'

// bulbasaur.scream()
// bulbasaur.speak()
//console.log(bulbasaur.getMoves())
bulbasaur.getMoves()