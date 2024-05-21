
const nombre = prompt("Ingrese su nombre")

alert( "Hola, " + nombre + " ¡Bienvenidos a Alpha!")

let comida = prompt("Ingrese el tipo de comida deseado (opcion 1 vegetariano, opcion 2 carnivoro)")

while(comida !=1 && comida !=2 ) {
    alert("La opción seleccionada no existe, paparulo")
    comida = prompt("Ingrese el tipo de comida deseado (opcion 1 vegetariano, opcion 2 carnivoro)")

}

class vegetariano {
    constructor(id,plato, precio,) {
        this.id =id;
        this.plato = plato;
        this.precio = parseFloat(precio);
    }
}
class carnivoro {
    constructor(id,plato, precio,) {
        this.id =id;
        this.plato = plato;
        this.precio = parseFloat(precio);
    }

}

const carnivoros = [];
carnivoros.push(new carnivoro(0,"Pastel de papa", 500));
carnivoros.push(new carnivoro(1,"Milanesa a caballo", 550));
localStorage.setItem('carnivoro', JSON.stringify(carnivoros));


const vegetarianos = [];
vegetarianos.push(new vegetariano(0,"Guiso de Lenteja", 500));
vegetarianos.push(new vegetariano(1,"Sopa de tomate", 550));

if(comida === "1"){
    for(const menu of vegetarianos){
        alert(`Opción ${menu.id} - ${menu.plato} - Precio: $${menu.precio}`)
    }
    let eleccion = parseInt(prompt("Escriba el número de su plato"));
    let platoSeleccionado = vegetarianos[eleccion]
}else{
    for(const menu of carnivoros){
        alert(`Opción ${menu.id} - ${menu.plato} - Precio: $${menu.precio}`)
    }
    let eleccion = parseInt(prompt("Escriba el número de su plato"));
    let platoSeleccionado = carnivoros[eleccion]
}

let carritoDeCompras = []

let contenedorProductos = document.getElementById('contenedor-productos')
let contenedorCarrito = document.getElementById('contenedor-carrito')
let contadorCarrito = document.getElementById('contadorCarrito')
let total = document.getElementById('precioTotal')
//filtro
function filtro() {
    let filtrarProd = prompt('que talle esta buscando')
    if(filtrarProd == 'todos'){
        mostrarProductos(stockProductos)
    }else{
        let arrayNuevo = stockProductos.filter(producto => producto.talle == filtrarProd)
        mostrarProductos(arrayNuevo)
    }
}

//Buscador


mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){
    contenedorProductos.innerHTML =""
   array.forEach(item =>{
    let div = document.createElement('div')
    div.className = 'producto'
    // div.setAttribute('class', 'producto')
    // div.classList.add('producto')
    div.innerHTML = `<div class="card">
                        <div class="card-image">
                            <img src="${item.img}">
                            <span class="card-title">${item.nombre}</span>
                            <a id="boton" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${item.desc}</p>
                            <p>Talle: ${item.talle}</p>
                            <p> $${item.precio}</p>
                        </div>
                    </div>
                    `
        contenedorProductos.appendChild(div)
   })

    agregarAlCarrito()
}


function agregarAlCarrito() {
    
    let productoAgregar = prompt('que producto quiere?').toLowerCase()
    let encontrado = stockProductos.find(element=> element.nombre.toLowerCase() == productoAgregar)
    carritoDeCompras.push(encontrado)
    mostrarCarrito(encontrado)
    actualizarCarrito()
}





function mostrarCarrito(encontrado) {
console.log(encontrado);
    let div = document.createElement('div')
    div.className= 'productoEnCarrito'
    div.innerHTML =`<p>${encontrado.nombre}</p>
                    <p>precio: $${encontrado.precio}</p>
                    <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)
}



function  actualizarCarrito (){
   contadorCarrito.innerText = carritoDeCompras.length
   total.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.precio, 0)
   
}

let stockProductos = [
    {
        id: 0,
        nombre: "Guiso de lentejas",
        detalle: "",
        precio: 500,
        stock: 100,
        img: "",
    },
    {
        id: 1,
        nombre: "Sopa de tomate",
        detalle: "",
        precio: 500,
        stock: 100,
        img: "",
    },
    {
        id: 2,
        nombre: "Rissotto de pollo",
        detalle: "",
        precio: 750,
        stock: 100,
        img: "",
    },    
    {
        id: 3,
        nombre: "Pechuga grille + pure mixto",
        detalle: "",
        precio: 750,
        stock: 100,
        img: "",
    },    
    {
        id: 4,
        nombre: "Lomo con papas",
        detalle: "",
        precio: 750,
        stock: 100,
        img: "",
    },    
    {
        id: 5,
        nombre: "Chorizo a la pomarola",
        detalle: "",
        precio: 750,
        stock: 100,
        img: "",
    }
]
