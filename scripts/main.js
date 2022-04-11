// Declaracion variables
let carta = ""
let opciones = ""
let plato = []
let cuentaParcial = 0
let cuentaTotal = 0
let comida =""
let pedido=[]
let variedades=["Tacos","Burritos","Postres","Bebidas"]
// Declarando Functions
function iniciar(){
    personalizarNombre()
    crearLista()
}

        // Function Constructor
class Variedad{
    constructor(id, nombre){
        this.id= id
        this.nombre= nombre
    }
}
class Burritos{
    constructor (id, tipo, variedad, precio){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
    }
}
class Tacos{
    constructor (id, tipo, variedad, precio){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
    }
}
class Postres{
    constructor (id, tipo, variedad, precio){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
    }
}
class Bebidas{
    constructor (id, tipo, variedad, precio){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
    }
}
            //Construyendo Objetos 
const variedadBurrito = new Variedad(1,"Burritos")
const variedadTaco = new Variedad(2,"Tacos")
const variedadPostre = new Variedad(3,"Postres")
const variedadBebida = new Variedad(4,"Bebidas")
const burritoCarne = new Burritos(1,"Burrito","Carne",650)
const burritoCerdo = new Burritos(2,"Burrito","Cerdo",570)
const burritoPollo = new Burritos(3,"Burrito","Pollo",500)
const burritoVeggie = new Burritos(4,"Burrito","Veggie",520)
const tacoPastor = new Tacos(5,"Taco","Pastor",580)
const tacoCerdo = new Tacos(6,"Taco","Cerdo",550)
const tacoMixto = new Tacos(7,"Taco","Pollo y Carne",500)
const tacoVeggie = new Tacos(8,"Taco","Veggie",400)
const postreBanana = new Postres(9,"Postre", "Banana con tequila",350)
const postreBrownie = new Postres(10,"Postre","Brownie con helado",430)
const postreHelado = new Postres(11,"Postre","Helado de Dulce de leche",350)
const postreVolcan = new Postres(12,"Postre","Volcan de chocolate",450)
const bebidaCoca = new Bebidas(13,"Bebida","Coca-Cola",150)
const bebidaTrago = new Bebidas(14,"Bebida","Margarita",300)


            //Armando arrays con los objetos 

const menu = []
menu.push(variedadTaco,variedadBurrito,variedadBebida,variedadPostre)
let listaBurritos=[]
listaBurritos.push(burritoCarne,burritoCerdo,burritoPollo,burritoVeggie)
let listaTacos=[]
listaTacos.push(tacoPastor,tacoCerdo,tacoMixto,tacoVeggie)
let listaPostres=[]
listaPostres.push(postreBanana,postreBrownie,postreHelado,postreVolcan)
let listaBebidas=[]
listaBebidas.push(bebidaCoca,bebidaTrago)

    //Fin Objetos/ Arrays 

function cartaResto(){
    carta = prompt("Desea ver la carta?")
    while (carta.toLowerCase() === "si"){
        mostrarCarta()

        // Creando ciclos para poder dar funcionamiento al programa

        while (opciones.toLowerCase() === "tacos" || opciones.toLowerCase() === "burritos" || opciones.toLowerCase() === "postres" || opciones.toLowerCase() === "bebidas"){
            if (opciones.toLowerCase() === "tacos"){
                alert("Seleccione alguna de las siguientes variedades por el numero")
                for(const elem of listaTacos)
                alert(elem.id + ") " + elem.variedad + " $" + elem.precio)
                let seleccion = prompt("Ingrese el numero de su variedad: ")
                if (seleccion>4 && seleccion<=8){
                    plato = listaTacos.find((plato)=>plato.id==seleccion)
                    console.log(plato)
                    pedido.push(plato)
                    console.log(pedido)
                    cuentaParcial+=plato.precio
                    console.log(cuentaParcial)
                    pedirComida()
                }
                else{
                    alert("Opcion incorrecta, intente de nuevo")
                    mostrarCarta()
                }
            }
            else if (opciones.toLowerCase() === "burritos"){ 
                alert("Seleccione alguna de las siguientes variedades por el numero")
                for(const elem of listaBurritos)
                alert(elem.id + ") " + elem.variedad + " $" + elem.precio)
                let seleccion = prompt("Ingrese el numero de su variedad: ")
                if (seleccion<=4){
                    plato=listaBurritos.find((plato)=>plato.id==seleccion)
                    console.log(plato)
                    pedido.push(plato)
                    console.log(pedido)
                    cuentaParcial+=plato.precio
                    console.log(cuentaParcial)
                    pedirComida()
                }
                else{
                    alert("Opcion incorrecta, intente de nuevo")
                    mostrarCarta()
                }
                }
            else if (opciones.toLowerCase() === "postres"){ 
                alert("Seleccione alguna de las siguientes variedades por el numero")
                for(const elem of listaPostres)
                alert(elem.id + ") " + elem.variedad + " $" + elem.precio)
                let seleccion = prompt("Ingrese el numero de su variedad: ")
                if (seleccion<=12 && seleccion>8){
                    plato=listaPostres.find((plato)=>plato.id==seleccion)
                    console.log(plato)
                    pedido.push(plato)
                    console.log(pedido)
                    cuentaParcial+=plato.precio
                    console.log(cuentaParcial)
                    pedirComida()
                }
                else{
                    alert("Opcion incorrecta, intente de nuevo")
                    mostrarCarta()
                }
                }
            else if (opciones.toLowerCase() === "bebidas"){ 
                alert("Seleccione alguna de las siguientes variedades por el numero")
                for(const elem of listaBebidas)
                alert(elem.id + ") " + elem.variedad + " $" + elem.precio)
                let seleccion = prompt("Ingrese el numero de su variedad: ")
                if (seleccion<=15 && seleccion>12){
                    plato=listaBebidas.find((plato)=>plato.id==seleccion)
                    console.log(plato)
                    pedido.push(plato)
                    console.log(pedido)
                    cuentaParcial+=plato.precio
                    console.log(cuentaParcial)
                    pedirComida()
                }
                else{
                    alert("Opcion incorrecta, intente de nuevo")
                    mostrarCarta()
                }
            }
            else{
                alert("Opcion incorrecta! Intente de nuevo")
                mostrarCarta()
            }
        }
        if (((opciones.toLowerCase() !== "tacos" || opciones.toLowerCase() !== "burritos" || opciones.toLowerCase() !== "postres" || opciones.toLowerCase() !== "bebidas") && opciones.toLowerCase()=="no")){
            alert("Gracias por elegirnos!")
            alert("No olvides abrir tu consola para ver tu pedido!")
            break
        }
        else if (opciones.toLowerCase() !== "tacos" || opciones.toLowerCase() !== "burritos" || opciones.toLowerCase() !== "postres" || opciones.toLowerCase() !== "bebidas"){
            console.log(opciones)
            alert("OPCION INCORRECTA, INTENTE DE NUEVO")
            mostrarCarta()
        }
    } 
    if (carta.toLowerCase() === "no"){
        alert("Gracias por visitarnos!")
    }   
    }

function mostrarCarta(){
    opciones = prompt(`MENÚ\n
        TACOS\n
        BURRITOS\n
        POSTRES\n
        BEBIDAS\n `)
}
function pedirComida(){
    comida = prompt ("Desea seguir pidiendo comida?")
                    if (comida.toLowerCase() === "si"){
                        mostrarCarta()}
                    else {
                        mostrarPedidoFinal()
                            console.log("El total de su pedido es de: $" + cuentaTotal)
                            for(elemento of pedido){
                                console.log("Su pedido es: " + elemento.tipo + " " + elemento.variedad)
                            }
                        opciones="no"
                        
                    }
}
function personalizarNombre(){
const nombre=prompt("Ingresa tu nombre!")
let titulo=document.getElementById("titulo")
console.log(titulo.innerText)
titulo.innerText = `Bienvenid@, ${nombre}!`
console.log(titulo.innerText)
}
function crearLista(){
    const listaVariedades = document.querySelector("#listaVariedades")
    menu.forEach((categoria)=>{
        const miBoton = document.createElement("button");
        miBoton.setAttribute("class", "botonMenu");
        miBoton.innerHTML=categoria.nombre;
        listaVariedades.appendChild(miBoton)
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

// Fin de declaracion de functions
// Inicio del codigo ejecutable
iniciar()
console.log(menu)