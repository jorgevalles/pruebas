var articulos= [
    {nombre : "bici", costo : 3000},
    {nombre : "tv", costo : 2500},
    {nombre : "libro", costo : 320},
    {nombre : "celular", costo : 10000},
    {nombre : "laptop", costo : 20000},
    {nombre : "teclado", costo : 500},
    {nombre : "audifonos", costo : 1700}
];

var encuentraarticulos = articulos.find(function(articulo){
    return articulo.nombre ==="laptop"
});



foreach

var articulos= [
    {nombre : "bici", costo : 3000},
    {nombre : "tv", costo : 2500},
    {nombre : "libro", costo : 320},
    {nombre : "celular", costo : 10000},
    {nombre : "laptop", costo : 20000},
    {nombre : "teclado", costo : 500},
    {nombre : "audifonos", costo : 1700}
];



articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});



some

var articulos= [
    {nombre : "bici", costo : 3000},
    {nombre : "tv", costo : 2500},
    {nombre : "libro", costo : 320},
    {nombre : "celular", costo : 10000},
    {nombre : "laptop", costo : 20000},
    {nombre : "teclado", costo : 500},
    {nombre : "audifonos", costo : 1700}
];

var articulosbaratos = articulos.some(function(articulo){
    return articulo.costo <=700
});



