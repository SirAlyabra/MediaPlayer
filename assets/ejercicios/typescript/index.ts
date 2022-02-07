// // console.log("Helo type");

//import { StringifyOptions } from "querystring";

// // function add(a: number, b: number) {
// //     return a + b;
// // }

// // const sum = add(2,3);

// //Boolean

// let muted: boolean = true;
// muted = false;

// // muted = "callado";
// //marca error ppor que en typeScript no se pueden modificar el tipo 


// //numeros
// let age = "6"
// let numerador: number  =4;
// let denominador: number = 6;

// let resultado = numerador / denominador;

// //string

// let nombre: string = 'Alex';

// //arreglos mezcaldos o expeficios

// let people: string[] = [];//solo string
// people = ["Isabel", "Lizbeth", "Karen"];
// people.push("ddf");

// let peopleAndNumber: Array< string | number > = [];
// peopleAndNumber.push(4);
// peopleAndNumber.push("as");

// enum Color {
//     Rojo,
//     Verde,
//     Azul,
// }

// let colorFavorito: Color = Color.Rojo;
// console.log("Mi color favorito es "+colorFavorito);//Te da la posicion

// enum Colores {
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul = "azul",
// }

// //asi si te da el valor


// // any para cambiar
// let comodin: any = "joker";
// comodin ={type: "Wildcard"}



// function add(a: number, b: number): number {
//     return a + b;
// }

// const sum = add(4, 5);

// function createAdder (a: number): (number) => number {
//     return function (b: number) {
//         return b + a;
//     }
// }

// const addFour = createAdder(4);

// const fourPlus6 = addFour(6);

// function fullName(firstName: string, lastName: string ='Smith'): string {
//     return firstName+lastName;
// }


// const richard = fullName('Alec');

// console.log(richard);
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
}

interface Rectangulo {
    ancho: number
    alto: number
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 8,
    color: Color.Rojo,

};

function area(r: Rectangulo): number {
    return r.alto*r.ancho;
}

const areaRect = area(rect);

console.log(areaRect);

rect.toString = function() {
    return "Un rectangulo"+this.color;
}
console.log(rect.toString());
