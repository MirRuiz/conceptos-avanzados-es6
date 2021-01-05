const person1 = {
  id: 35,
  name: "Miriam",
  surname: "Ruiz",
  age: 38,
};
const nombres = ["miriam", "bitto", "arika", "luken"];
const numeros = [1, 2, 3, 4, 5, 6];

//1.HASID
const hasId = (propiedades) => propiedades.hasOwnProperty("id");

console.log(hasId(person1));

//2.HEAD
const head = ([primero]) => primero;
console.log(head(nombres));

//3.TAIL
const tail = ([, ...restItems]) => restItems;
console.log(tail(nombres));

//4.swapFirstToLast
const swapFirstToLast = ([first, ...restItem]) => {
  console.log([...restItem, first]);
};
swapFirstToLast(nombres);

//5.excludeId
const excluedId = ({ id, ...rest }) => rest;
console.log(excluedId(person1));

//6.wordsStartingWithA
/* const wordsStartingWithA = names =>names.filter(name =>name[0]==="a" */
const wordsStartingWithA = (names) =>
  names.filter(
    (name) => /^\a/.test(name)
    //  const wordsStartingWithA = names =>names.filter(name =>name.startsWith("a")
  );
console.log(wordsStartingWithA(nombres));

//7.CONCAT
const citys = ["Madrid", "Sevilla", "Bilbao", "Logroño"];
const concat = (...ciudades) => ciudades.reduce((acc,ciudad)=> `${acc}${ciudad}`,"")
console.log(concat(citys.join("|")));

//8.MULTARRAY

const multArray = (n, numeros) => numeros.map((numero) => n * numero);
console.log(multArray(5, numeros));

//9.CALCMULT
const calcMult = (numeros) =>
  numeros.reduce((multNum, numero) => multNum * numero, 1);
console.log(calcMult(numeros));

//10.SWAPFIRSTSECOND

const swapFirstSecond = ([first, second, ...rest]) => {
  console.log(second, first, ...rest);
};
swapFirstSecond(citys);

//11.LONGEST
const text0 = [
  "hola me llamo miriam",
  "tengo 38 años",
  "me gustan los animales",
];

const longest = (frases, character) =>
  frases.every((frase) => frase.startsWith(character));

console.log(longest(text0, "t"));

//12.SEARCHINSTRINGV1

const frase = "Me llamo Miriam";

const saberCuantas = (frase, letra) => {
  const fraseArray = Array.from(frase.toLowerCase());
  // console.log(fraseArray)
  return fraseArray.reduce(
    (contador, elemento) => (elemento === letra ? contador++ : contador),
    0
  );
};

console.log(saberCuantas(frase, "l"));

//13.SEARCHINSTRINGV2
const saberCuantas2 = (frase, letra) => {
  const fraseNueva = Array.from(frase.toLowerCase());
  const resultado = fraseNueva.filter((elemento) => elemento === letra);
  return resultado.length;
};
console.log(saberCuantas2(frase, "m"));

//14.SORTCHARACTER
const sortCharacter = (str) => {
  const nuevoArray = Array.from(str.toLowerCase());
  nuevoArray.sort();
  return nuevoArray;
};
console.log(sortCharacter("hola"));

//15.SHOUT
const familia = ["miriam","erika","luken","bitto"]
const shout = (...palabras) =>{
  
       return  palabras.reduce((acc,palabra) =>`${acc}¡${palabra}! ` , " ").toUpperCase()
       
  }
  console.log(shout("miriam","erika","luken","bitto"))

//16.LISTA DE LA COMPRA
const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

const obtenerIVA = (products) => products.map((product) =>(product.price * product.units * 0.21).toFixed(2));

console.log(obtenerIVA(shoppingCart));

const ordenarLista = (products) =>
  products.sort((a, b) => (a.units < b.units ? 1 : -1));
console.log(ordenarLista(shoppingCart));

const subTotalDrogueria = (products) => {
  return products.reduce(
    (acc, product) =>
      product.category === "Droguería"
        ? (acc += product.price * product.units)
        : acc,
    1
  );
};
console.log(subTotalDrogueria(shoppingCart));
const ordenarCategoria = productos => productos.sort((a,b) => a.category < b.category ? -1 : 1)

ordenarCategoria(shoppingCart)
console.log("PRODUCTO ------> PRECIO TOTAL");
const listaProducto = productos => productos.forEach(producto =>{
   console.log(`${producto.product}----- ${producto.price * producto.units * 1.21} €`)})

listaProducto(shoppingCart);

