//bienvenida

alert("Hola! que bueno tenerte por aca! presionar enter");
let Nombre = prompt("ingresa tu nombre!");
let Ingresecel = parseInt(prompt("ingresa tu numero de celular!"));

if ((Ingresecel != "") && (Nombre !="")){
    
    alert( "bienvenido: " + "Tu nombre es: " + Nombre+ "Tu celular es: " +Ingresecel);

}else{
    alert("FATAL: por favor ingrese su nombre y numero celular");
}

//productos

const productos = [
    {id:1, nombre: "helado", precio: 800},
    {id:2, nombre: "paletas", precio: 400},
    {id:3, nombre: "tortas heladas", precio: 1500},
    {id:4, nombre: "trufas heladas", precio: 1000},
];

//agregar producto al chango

let changuitoDecompras = []

let seleccionarProducto = prompt("quiere comprar un producto? si/no")

while(seleccionarProducto != "si" && seleccionarProducto != "no"){
    alert("ingrese si o no")
};

if(seleccionarProducto == "si"){
    alert("Nuestra lista de productos!")
    let Losproductos = productos.map((producto) => producto.nombre + "" + producto.precio + "$");
    alert(Losproductos.join (" _ "))
} else if (seleccionarProducto == "no"){
    alert("Que tengas un bonito dia!")
}

while(seleccionarProducto != "no"){
    let productos = prompt("agregar producto a tu carrito")
    let precio = 0

    if(productos == "helado" || productos == "paletas" || productos == "tortas heladas" || productos == "trufas heladas" ){
      switch(productos){
        case "helado":
         precio = 800;
         break;
        case "paletas":
         precio = 400;
         break;
        case "tortas heladas":
         precio = 1500;
         break;
        case "trufas heladas":
         precio = 1200;
         break;
        
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))
    
    changuitoDecompras.push({productos, unidades, precio})
    }else{
        alert("FATAL: no tenemos ese producto")
    }
    seleccionarProducto = prompt("Desea continuar con la compra? si/no")

    while(seleccionarProducto === "no"){
        alert("gracias por tu compra! vuelve pronto!")
        changuitoDecompras.forEach((changofinal) => {
            console.log(`producto: ${changofinal.productos}, unidades: ${changofinal.unidades} su total ${changofinal.unidades * changofinal.precio}`)
        })
        break;
    }
}

//calculador precio final

function total(){
   let precioTotal = changuitoDecompras.reduce(((acc, el) => acc + el.precio * el.unidades, 0))
    return precioTotal(`el total a pagar es: ${total}`);
}

//DOM

console.dir(document.body);

//elemento por id
let divSeccion = document.getElementById("divSeccion");
console.log(divSeccion.innerText);
divSeccion.style.color="black";

//tabla

let tabla=document.createElement("table");
tabla.className="table table-striped"
let cuerpoDetabla=document.createElement("tbody");
for(const producto of productos){
    cuerpoDetabla.innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>           
    `;

}

tabla.append(cuerpoDetabla);
let tabladeproductos = document.getElementById("tablaProductos");
tabladeproductos.append(tabla);
