export const pokemonIds = [1, 20, 30, 34, 66]

// export const pokemon = {
//     id: 1,
//     name: 'Bulbasaur',
//     type: 'Grass'

// }

// console.log(pokemon)

pokemonIds.push(+'1')

console.log(pokemonIds);

interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const Bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 35
}

export const charmander: Pokemon = {
    id: 4,
    name: "chamander",
    age: 25

}

console.log(Bulbasaur);