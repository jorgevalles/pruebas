var numero = 1;

switch (numero) {
  case 1:
    console.log("soy uno!");
    break;
  case 10:
    console.log("soy un diez");
    break;
  case 100:
    console.log("soy un 100");
    break;
  default:
    console.log("no soy nada");
}

var jorge = "piedra";
var computadora = "tijera";
switch (jorge) {
  case "piedra":
    switch (computadora) {
      case "papel":
        console.log("perdi piedra!");
        break;
      case "tijera":
        console.log("gane piedra!");
        break;

      default:
        console.log("empate!");
        break;
    }
    break;
  case "papel":
    switch (computadora) {
      case "piedra":
        console.log("gane papel!");
        break;
      case "tijera":
        console.log("perdi papel!");
        break;

      default:
        console.log("empate!");
        break;
    }
break;
  case "tijera":
    switch (computadora) {
      case "piedra":
        console.log("perdi tijera!");
        break;
      case "papel":
        console.log("gane tijera!");
        break;

      default:
        
        console.log("empate!");
        break;
    }
    break;

  default:
    break;
}









