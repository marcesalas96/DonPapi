// Declaracion variables
let cuentaParcial = 0
let cuentaTotal = 0
let contador = 0
        // Function Constructor
class Variedad{
    constructor(id, nombre){
        this.id= id
        this.nombre= nombre
    }
}
class Burritos{
    constructor (id, tipo, variedad, precio, categoria){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
    }
}
class Tacos{
    constructor (id, tipo, variedad, precio, categoria){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
    }
}
class Postres{
    constructor (id, tipo, variedad, precio, categoria){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
    }
}
class Bebidas{
    constructor (id, tipo, variedad, precio, categoria){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
    }
}
            //Construyendo Objetos 
const variedadBurrito = new Variedad(1,"Burritos")
const variedadTaco = new Variedad(2,"Tacos")
const variedadPostre = new Variedad(3,"Postres")
const variedadBebida = new Variedad(4,"Bebidas")
const burritoCarne = new Burritos(1,"Burrito","Carne",650,1)
const burritoCerdo = new Burritos(2,"Burrito","Cerdo",570,1)
const burritoPollo = new Burritos(3,"Burrito","Pollo",500,1)
const burritoVeggie = new Burritos(4,"Burrito","Veggie",520,1)
const tacoPastor = new Tacos(5,"Taco","Pastor",580,2)
const tacoCerdo = new Tacos(6,"Taco","Cerdo",550,2)
const tacoMixto = new Tacos(7,"Taco","Pollo y Carne",500,2)
const tacoVeggie = new Tacos(8,"Taco","Veggie",400,2)
const postreBanana = new Postres(9,"Postre", "Banana con tequila",350,3)
const postreBrownie = new Postres(10,"Postre","Brownie con helado",430,3)
const postreHelado = new Postres(11,"Postre","Helado de Dulce de leche",350,3)
const postreVolcan = new Postres(12,"Postre","Volcan de chocolate",450,3)
const bebidaCoca = new Bebidas(13,"Bebida","Coca-Cola",150,4)
const bebidaTrago = new Bebidas(14,"Bebida","Margarita",300,4)


            //Armando arrays con los objetos 

const menu = []
menu.push(variedadBurrito,variedadTaco,variedadPostre,variedadBebida)
const listaComidas = []
listaComidas.push(burritoCarne,burritoCerdo,burritoPollo,burritoVeggie,tacoPastor,tacoCerdo,tacoMixto,tacoVeggie,postreBanana,postreBrownie,postreHelado,postreVolcan,bebidaCoca,bebidaTrago)

    //Fin Objetos/ Arrays 
    //Creando Functions
function iniciar(){
        personalizarNombre()
        crearBotones()
        cerrarPlatos()
}    
function personalizarNombre(){
const nombre=prompt("Ingresa tu nombre!")
let titulo=document.getElementById("titulo")
titulo.innerText = `Bienvenid@, ${nombre}!`

}
function crearBotones(){
    const btnMenu = document.querySelector("#menu")
    menu.forEach((categoria)=>{
        const miBoton = document.createElement("button");
        miBoton.setAttribute("class", "botonMenu");
        miBoton.innerHTML=categoria.nombre;
        miBoton.addEventListener("click", ()=> mostrarPlatos(categoria.id))
        btnMenu.appendChild(miBoton)
    })
}
function mostrarPedidoFinal(){
    const pedidoFinal = document.getElementById("pedidoFinal")
    pedidoFinal.innerHTML="<h3>Su pedido es: </h3>"
    for (elem of pedido){
        let li = document.createElement("li")
        li.innerHTML = elem.tipo + " " + elem.variedad
        pedidoFinal.appendChild(li)
    }
    cuentaTotal=cuentaParcial
    pedidoFinal.innerHTML+=`<h3>La cuenta final es: $ ${cuentaTotal}</h3> `

}

function cerrarPlatos(){
    let div = document.querySelector("#listaMenu");
    console.log(div)
    let cerrar= document.querySelectorAll("#div__hijo");
    cerrar.forEach((nodo)=>{
        div.removeChild(nodo)})
    contador=0
}


function mostrarPlatos(idCategoria){
    const productosFiltrados = listaComidas.filter(comida=> comida.categoria === idCategoria)
    const div = document.querySelector("#listaMenu")
    const contenedor =document.createElement("div")
    if (idCategoria==1){
        contenedor.setAttribute("class","div__burritos")
        contenedor.setAttribute("id","div__hijo")
        div.appendChild(contenedor)
    }
    else if (idCategoria==2){
        contenedor.setAttribute("class","div__tacos")
        contenedor.setAttribute("id","div__hijo")
        div.appendChild(contenedor)
    }
    else if (idCategoria==3){
        contenedor.setAttribute("class","div__postres")
        contenedor.setAttribute("id","div__hijo")
        div.appendChild(contenedor)
    }
    else if (idCategoria==4){
        contenedor.setAttribute("class","div__bebidas")
        contenedor.setAttribute("id","div__hijo")
        div.appendChild(contenedor)
    }
    crearMenu(productosFiltrados,idCategoria)

}
function crearMenu(productosFiltrados,idCategoria){
    while (idCategoria==1){
        let cadena = ``
        productosFiltrados.forEach((plato)=>{
            cadena +=
            `<p> 
            ${plato.id}) ${plato.tipo} ${plato.variedad} precio: $${plato.precio}
            </p>`
            document.querySelector(".div__burritos").innerHTML= cadena
        })
        contador++
        if (contador>1){
            cerrarPlatos()
        }
        break
        
    }
    while (idCategoria==2){
        let cadena = ``
        productosFiltrados.forEach((plato)=>{
            cadena +=
            `<p> 
            ${plato.id}) ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
            </p>`
            document.querySelector(".div__tacos").innerHTML= cadena
        })
        contador++
        console.log(contador)
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
    while (idCategoria==3){
        let cadena = ``
        productosFiltrados.forEach((plato)=>{
            cadena +=
            `<p> 
            ${plato.id}) ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
            </p>`
            document.querySelector(".div__postres").innerHTML= cadena
        })
        contador++
        console.log(contador)
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
    while (idCategoria==4){
        let cadena = ``
        productosFiltrados.forEach((plato)=>{
            cadena +=
            `<p> 
            ${plato.id}) ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
            </p>`
            document.querySelector(".div__bebidas").innerHTML= cadena
        })
        contador++
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
}

// Fin de declaracion de functions
// Inicio del codigo ejecutable
iniciar()
