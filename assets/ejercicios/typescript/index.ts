// console.log("Helo type");

// function add(a: number, b: number) {
//     return a + b;
// }

// const sum = add(2,3);

//Boolean

let muted: boolean = true;
muted = false;

// muted = "callado";
//marca error ppor que en typeScript no se pueden modificar el tipo 


//numeros
let age = "6"
let numerador: number  =4;
let denominador: number = 6;

let resultado = numerador / denominador;

//string

let nombre: string = 'Alex';

//arreglos mezcaldos o expeficios

let people: string[] = [];//solo string
people = ["Isabel", "Lizbeth", "Karen"];
people.push("ddf");

let peopleAndNumber: Array< string | number > = [];
peopleAndNumber.push(4);
peopleAndNumber.push("as");

enum Color {
    Rojo,
    Verde,
    Azul,
}

let colorFavorito: Color = Color.Rojo;
console.log("Mi color favorito es "+colorFavorito);//Te da la posicion

enum Colores {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "azul",
}

//asi si te da el valor


// any para cambiar
let comodin: any = "joker";
comodin ={type: "Wildcard"}

