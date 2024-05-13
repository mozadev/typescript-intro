

export let name: string = 'cesar';
export const age = 35;
export const isValid: boolean = true;



console.log(name); // Hola Mundo!

export const templateString = `Esto es un string
multiline
that can have
"double
'single
inyect values ${name}
expresiones ${1 + 1}
numbers: ${age}
booleans: ${isValid}
`

console.log(templateString);