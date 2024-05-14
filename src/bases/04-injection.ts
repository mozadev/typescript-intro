

// export class Pokemon {
//    public id: number;
//    public name: string;

import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface"
import { PokeApiAdapter } from "../api/pokeApi.adapter"


//    constructor(id: number, name: string) {

//       this.id = id;
//       this.name = name;

//       console.log('constructor llamado')

//    }

// }

export class Pokemon {


   get imageUrl(): string {
      // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
      return `https://pokemon.com/${this.id}.jpg`
   }

   constructor(
      public readonly id: number,
      public name: string,
      // public imageUrl: string
      // Todo : dependency injection
        private readonly http: PokeApiAdapter      

   ) { }
   scream() {
      console.log(`${this.name.toUpperCase()}!!!!`)
      this.speak()
   }

   speak() {
      console.log(`${this.name} ${this.name}...`)
   }

   async getMoves() : Promise<Move[]> {
      //const moves = 10;
      // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
      // console.log(resp.data.moves);

      // return resp.data.moves;
      // destructuring
      // const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
    //   const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
    const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);
      return data.moves;
   }
}

const pokeApi = new PokeApiAdapter();
export const bulbasaur = new Pokemon(1, 'Bulbasaurname', pokeApi)
// bulbasaur.id = 2
// bulbasaur.name = 'Bulbasaurfdsfs'

// bulbasaur.scream()
// bulbasaur.speak()
//console.log(bulbasaur.getMoves())
bulbasaur.getMoves()