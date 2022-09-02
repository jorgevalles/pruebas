function auto(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autonuevo = new auto ("tesla", "modelo 3", 2020);
var autonuevo2 = new auto ("tesla", "modelo x", 2018);
var autonnuevo3 = new auto ("toyota", "corolla", 2020);




var autos = []

function auto(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for(var i = 0; i < 30; i++){
    auto(autos[i]); 
   }

   var autonuevo = new auto ("tesla", "modelo z", 2022)
   var guardarauto = autos.push(autonuevo)
   console.log("autos")
var autonuevo2 = new auto ("toyota", "corola",2020)




function registrarAutoNuevo(){
    var marca = prompt("Ingresa la marca: ");
    var modelo = prompt("Ingresa el modelo: ");
    var annio = prompt("Ingresa el año: ");
    var autonuevo3 = new auto(marca, modelo, annio);
    autos.push (autonuevo3);
    console.log("¡Agregaste tu nuevo carro con éxito!");
};
registrarAutoNuevo()