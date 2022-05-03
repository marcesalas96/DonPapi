//Creando Functions
function iniciar(){
        personalizarNombre()
        crearBotones()
        cerrarPlatos()
        aparecerCarrito()
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
function aparecerCarrito(){
    const btnCarrito = document.getElementById("btnCarrito")
    btnCarrito.addEventListener("click", ()=> {
        let div = document.querySelector("#divCarrito")
        div.setAttribute("class","activo")
    })

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
    div.innerHTML = `<div class="div__carrito"><h3>${nombreData}, este es tu carrito!</h3><div><button class="botonCarrito" id="btnVaciarCarrito">VACIAR CARRITO</button></div></div> `
    main.appendChild(div)
    const btnVaciarCarrito = document.getElementById("btnVaciarCarrito")
    btnVaciarCarrito.addEventListener("click",()=>console.log("click"))
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
    var prods = miCarrito.productos
    let nuevoContenedor=document.createElement("div")
    nuevoContenedor.setAttribute("class","div__carrito__div__productos")
    contenedor.innerHTML=""
    prods.forEach(producto=>{
        let nodoDiv = document.createElement("div")
        nodoDiv.setAttribute("class","nodoDiv")
        nodoDiv.innerHTML=`<img src="${producto.imagen}" class ="imagen__carrito"> ${producto.tipo} de ${producto.variedad} <div class="div__carrito__div__productos__botones"><input type="number" value=${producto.cantidad}> </input><button class="botonCarrito" id="botonDiv-${producto.id}">-</button></div>`
        nuevoContenedor.appendChild(nodoDiv)
        contenedor.appendChild(nuevoContenedor)
        const nodoDivBtn = document.querySelector(".div__carrito__div__productos__botones");
        const botonResta = document.querySelectorAll(`#botonDiv-${producto.id}`);
        botonResta.forEach(boton => {
            boton.addEventListener("click", () => sacarDelCarrito(producto))

        })
    })
    miCarrito.guardar()
    
}

function agregarAlCarrito(plato){
    let comidaParaAgregar = comidas.find(el=>el.id==plato.id)
    miCarrito.addProducto(comidaParaAgregar) 
    cuentaParcial+= plato.precio
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
    miCarrito.removeProducto(index)
    cuentaParcial-=producto.precio
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
            icon: "warning",
            title: `${nombreData}, gracias por elegirnos!`,
            text: `El total es: $${cuentaTotal}`,
            buttons: ["CANCELAR", "PAGAR"]
        }).then((aPagar)=>{
            aPagar ? eliminarCarrito() : swal ("Pago cancelado!", {icon: "error", })
        })
    })
}
function eliminarCarrito(){
    let eliminarDivCarrito= document.querySelectorAll(".nodoDiv")
    eliminarDivCarrito.forEach(nodo => {
        nodo.remove()
    })
    miCarrito.productos.splice(0,miCarrito.productos.length)
    cuentaParcial= 0
    localStorage.clear()
    swal("Pagaste!", {icon: "success", })
}
function vaciarCarrito(){
    swal({
        icon: "warning",
            title: `${nombreData}, seguro que queres vaciar tu carrito?`,
            buttons: ["CANCELAR", "VACIAR"]
    }).then((vaciar)=>{
        if (vaciar){
            let eliminarDivCarrito= document.querySelectorAll(".nodoDiv")
            eliminarDivCarrito.forEach(nodo => {
                nodo.remove()
            })
            miCarrito.productos.splice(0,miCarrito.productos.length)
            cuentaParcial= 0
            localStorage.clear()
            swal("Eliminaste tu carrito", {icon: "success", })
        }
        else{
            swal("Cancelaste la operacion!",{icon: "error",})
        }})
}

// Fin de declaracion de functions
// Inicio del codigo ejecutable
iniciar()
