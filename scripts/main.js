//Creando Functions
function iniciar(){
        personalizarNombre()
        crearBotones()
        cerrarPlatos()
}    
function personalizarNombre(){
let titulo=document.getElementById("titulo")
titulo.innerText = `Bienvenid@, ${nombreData}!`

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
        contador>1 && cerrarPlatos()
        break
        
    }
    while (idCategoria==2){
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato)=>{
            mostrarVariedades(plato,divHijo)
        })
        contador++
        contador>1 && cerrarPlatos()
        break
    }
    while (idCategoria==3){
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato)=>{
            mostrarVariedades(plato,divHijo)
        })
        contador++
        contador>1 && cerrarPlatos()
        break
    }
    while (idCategoria==4){
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato)=>{
            mostrarVariedades(plato,divHijo)
        })
        contador++
        contador>1 && cerrarPlatos()
        break
    }
}
function mostrarVariedades(plato,divHijo){
    const contenedorHijo = document.createElement("div")
    contenedorHijo.setAttribute("id","div__hijo")
    contenedorHijo.innerHTML=`<p> 
    ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
    </p> <img src="${plato.imagen}" class="div__imagen" alt="Imagen de un ${plato.tipo} de ${plato.variedad}">
    <div class="div__botones"><button class="botonCarrito" id="botonDiv+${plato.id}">Agregar al carrito</button> </div> `
    divHijo.appendChild(contenedorHijo)
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
    div.innerHTML = `<div class="div__carrito"><h3>${nombreData}, este es tu carrito!</h3></div>`
    main.appendChild(div)
    mostrarCarrito()
    
}
function mostrarCarrito(){
    let div = document.querySelector(".div__carrito")
    let divCarrito = document.querySelector(".div__carrito__div")
    if(divCarrito === null){
    divCarrito = document.createElement("div");
    divCarrito.setAttribute("class","div__carrito__div")
    divCarrito.innerHTML = `<h3>${nombreData}, tu carrito esta vacio!</h3>`
    div.appendChild(divCarrito)
}
actualizarCarrito()
mostrarCuentaTotal()
}
function actualizarCarrito(plato,producto){
    let contenedor = document.querySelector(".div__carrito__div")
    let prods = miCarrito.productos
    let nuevoContenedor=document.createElement("div")
    nuevoContenedor.setAttribute("class","div__carrito__div__productos")
    contenedor.innerHTML=""
    prods.forEach(producto=>{
        let nodoDiv = document.createElement("div")
        nodoDiv.setAttribute("class","nodoDiv")
        nodoDiv.innerHTML=`${producto.tipo} de ${producto.variedad} $${producto.precio} <div class="div__carrito__div__productos__botones"><button class="botonCarrito" id="botonDiv-${producto.id}">-</button></div>`
        nuevoContenedor.appendChild(nodoDiv)
        contenedor.appendChild(nuevoContenedor)
        const botonResta = document.getElementById(`botonDiv-${producto.id}`)
        botonResta.addEventListener("click",()=>sacarDelCarrito(producto))
    })
    miCarrito.guardar()
    
}

function agregarAlCarrito(plato){
    let comidaParaAgregar = comidas.find(el=>el.id==plato.id)
    miCarrito.addProducto(comidaParaAgregar) 
    cuentaParcial+= plato.precio
        console.log(cuentaParcial)
        Toastify({
            text:"Producto agregado al carrito con exito!",
            duration: 3000,
            gravity: "bottom",
            style: 
            {
                background: "orange",
                color: "black"
            }
        }).showToast()
        Toastify({
            text:`Su cuenta parcial es: $${cuentaParcial}`,
            duration: 3000,
            gravity: "bottom",
            style: 
            {
                background: "orange",
                color: "black"
            }
        }).showToast()
    actualizarCarrito(plato)

}
function sacarDelCarrito(producto){
    let comidaParaSacar = comidas.find(el=>el.id==producto.id)
    let index = miCarrito.productos.indexOf(comidaParaSacar)
    console.log(index)
    miCarrito.removeProducto(index)
    cuentaParcial-=producto.precio
    console.log(cuentaParcial)
    Toastify({
        text:"Eliminaste este producto exitosamente!",
        duration: 3000,
        gravity: "bottom",
        style: 
        {
            background: "orange",
            color: "black"
        }
    }).showToast()
    Toastify({
        text:`Su cuenta parcial es: $${cuentaParcial}`,
        duration: 3000,
        gravity: "bottom",
        style: 
        {
            background: "orange",
            color: "black"
        }
    }).showToast()
    actualizarCarrito(producto)
}
function mostrarCuentaTotal(){
    let contenedor = document.querySelector(".div__carrito")
    contenedor.innerHTML += `<button class="botonCarrito" id="btnCuenta">Mostrar Cuenta</button>`
    const botonCuenta = document.querySelector("#btnCuenta")
    botonCuenta.addEventListener("click",()=>{
        let cuentaTotal = cuentaParcial
        swal({
            title: `${nombreData}, gracias por elegirnos!`,
            text: `El total es: $${cuentaTotal}`,
            buttons: ["CANCELAR", "PAGAR"]
        }).then((aPagar)=>{
            aPagar ? swal("Pagaste!", {icon: "success", }) : swal ("Cancelaste tu pedido", {icon: "error", })
        })
    })
}

// Fin de declaracion de functions
// Inicio del codigo ejecutable
iniciar()
