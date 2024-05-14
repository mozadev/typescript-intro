
// const MyDecorator = (): ClassDecorator => target => {
//     console.log('MyDecorator', target);
// }

class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`No quiero!!`)
    }
    
    speak() {
        console.log(`no quiero hablar...`)
    }
}

// no es herencia, implementacion, solo es una definicion que tiene acceso a la clase, puede regreasar otra funcion o una modificacion, el target es una clase pero esta definida como una funcion 
// sobreescribe la clase sobre la que se le pone el decorador con la otra funcion.
const MyDecorator = () => {
    return (target: Function) => {
        // console.log(target);
        return NewPokemon;
    }

}

@MyDecorator()
export class Pokemon {

constructor(

    public readonly id: number,
    public name: string,

){}


scream() {
    console.log(`${this.name.toUpperCase()}!!!!`)
}

speak() {
    console.log(`${this.name},${this.name}  !!!!`)
}

}


export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
charmander.speak();