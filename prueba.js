// ¿Qué es una variable y para qué sirve?
// es un lugar apartado  en la memoria para alertmacenar informacion

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
// cuando se declara no se le da valor si no q afirmamos q existe, cuando la iniciamos le damos un valor ya sea un string  o numero

// ¿Cuál es la diferencia entre sumar números y concatenar strings?
// concatenar un strinmg es cuando se unen 2 string cuando sumamos dos valores numericos se realiza la operacion y cuando se suma un numero con string se concatena uniendoce los dos

// ¿Cuál operador me permite sumar o concatenar?

// Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
// Nombre string
// Apellido string
// Nombre de usuario en Platzi string
// Edad numero
// Correo electrónico string
// Mayor de edad booleano
// Dinero ahorrado numero
// Deudas numero

// Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
// Nombre= "jorge"
// Apellido = "valles"
// Nombre de usuario en Platzi "jorgevalles"
// Edad numero 40
// Correo electrónico "1jorgevalles@gmail.com"
// Mayor de edad si
// Dinero ahorrado 100
// Deudas 500

// 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
// Nombre completo (nombre y apellido)

// var nombre = "jorge"
// var apellido = "valles"
// console.log(nombre,apellido);

// Dinero real (dinero ahorrado menos deudas)

// const nombre = "jorge"
const apellido = "valles";
const correo ="";
let ahorros

const variables ={
    apellido: "valles",
correo:"",
ahorros:'',
}
// var usuario, edad, correo, adulto, ahorros, deudas;
// ahorros = 500;
// deudas = 3000;

// console.log(`nombre completo ${nombre} ${variables.apellido}.dinero real ${ahorros - deudas}`)

// Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es una función?
// ¿Cuándo me sirve usar una función en mi código?
// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
// 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
// const name ="Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";
function agregarValores(name,lastname, nickname ) {
    const completeName = name + lastname
    console.log(`tu nomnre es ${completeName}. Y su sobrenombre ${nickname}`)
}

agregarValores("Juan David","Castro Gallego","juandc")
// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
// Condicionales
// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es un condicional?
// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
// ¿Puedo combinar funciones y condicionales?
// 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

var Free, basic, expert, expertplus;

if (free) {
  console.log("Solo puedes tomar los cursos gratis");
} else if (Basic) {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (expert) {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (ExpertPlus) {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("no estudia");
}
