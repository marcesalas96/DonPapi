//Creando Functions
function iniciar(){
        personalizarNombre()
        crearBotones()
        cerrarPlatos()
}    
function personalizarNombre(){
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
    crearCarrito()
}


function mostrarPlatos(idCategoria){
    const productosFiltrados = listaComidas.filter(comida=> comida.categoria === idCategoria)
    const divPadre = document.querySelector("#listaMenu")
    const contenedor =document.createElement("div")
        contenedor.setAttribute("class","div__comidas")
        contenedor.setAttribute("id","div__padre")
        divPadre.appendChild(contenedor)
    crearMenu(productosFiltrados,idCategoria)
    
}
function crearMenu(productosFiltrados,idCategoria){
    while (idCategoria==1){
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato)=>{
            mostrarVariedades(plato,divHijo)
        })
        contador++
        if (contador>1){
            cerrarPlatos()
        }
        break
        
    }
    while (idCategoria==2){
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato)=>{
            mostrarVariedades(plato,divHijo)
        })
        contador++
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
    while (idCategoria==3){
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato)=>{
            mostrarVariedades(plato,divHijo)
        })
        contador++
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
    while (idCategoria==4){
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato)=>{
            mostrarVariedades(plato,divHijo)
        })
        contador++
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
}
function mostrarVariedades(plato,divHijo,productosFiltrados){
    const contenedorHijo = document.createElement("div")
    contenedorHijo.setAttribute("id","div__hijo")
    contenedorHijo.innerHTML=`<p> 
    ${plato.id}) ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
    </p> <img src=${plato.imagen} class="div__imagen" alt="Imagen de un ${plato.tipo} de ${plato.variedad}">
    <div class="div__botones"><button class="botonCarrito" id="botonDiv+${plato.id}">+</button> <button class="botonCarrito" id="botonDiv-${plato.id}">-</button></div> `
    divHijo.append(contenedorHijo)
    const boton = document.getElementById(`botonDiv+${plato.id}`)
    boton.addEventListener("click",()=>agregarAlCarrito(plato))
}
function cerrarPlatos(){
    let div = document.querySelector("#listaMenu");
    let cerrar= document.querySelectorAll("#div__padre");
    cerrar.forEach((nodo)=>{
        div.removeChild(nodo)})
    contador=0
}
function crearCarrito(){
    const main = document.querySelector("main")
    const div = document.createElement("div")
    div.setAttribute("id","divCarrito")
    div.innerHTML = `<div class="div__carrito"><button class="botonMenu" id="botonCarrito">Mostrar Carrito</button></div>`
    main.appendChild(div)
    let boton = document.querySelector("#botonCarrito")
    boton.addEventListener("click",()=>mostrarCarrito())
    
}
function mostrarCarrito(){
    let div = document.querySelector(".div__carrito")
    let divCarrito = document.querySelector(".div__carrito__div")
    if(divCarrito === null)
    
    {
    divCarrito = document.createElement("div");
    divCarrito.setAttribute("class","div__carrito__div")
    divCarrito.innerHTML = `<div class="div__carrito__div"><h3>${nombre}, este es tu pedido!</h3></div>`
    div.appendChild(divCarrito)
    }
    actualizarCarrito()
}
function actualizarCarrito(){
    let contenedor = document.getElementsByClassName("div__carrito__div")
    contenedor.innerHTML=""
    let prods = miCarrito.productos
    let nuevoContenedor=document.createElement("div")
    nuevoContenedor.setAttribute("class","div__carrito__div__productos")
    prods.forEach(listaComidas=>{
        let nodoLi = document.createElement("div")
        nodoLi.innerHTML = `${listaComidas.tipo} de ${listaComidas.variedad} - $${listaComidas.precio}`
        nuevoContenedor.appendChild(nodoLi)
    })
    miCarrito.guardar()
}
function agregarAlCarrito(plato){
    let comidaParaAgregar = comidas.find(el=>el.id==plato.id)
    console.log(comidaParaAgregar)
}



// Fin de declaracion de functions
// Inicio del codigo ejecutable
iniciar()
// if(!miCarrito){
//     miCarrito = new Carrito([])
// }
// else{
//     miCarrito=new Carrito(data);
// }
