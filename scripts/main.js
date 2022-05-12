//Creando Functions
function iniciar() {
    crearBotones()
    preguntarNombre()
    cerrarPlatos()
    aparecerCarrito()
}
function preguntarNombre() {
    if (!nombreData) {
        swal({
            title: "Hola!",
            text: "Ingresa tu nombre!",
            content: "input",
        }).then((value) => {
            swal({
                text: "Ingreso correcto!",
                icon: "success",
            })
            let preguntoNombre = value
            nombre = new Nombre(preguntoNombre)
            nombre.guardarNombre(preguntoNombre)
            nombreData = JSON.parse(localStorage.getItem("NOMBRE"))
            personalizarNombre()
            crearCarrito()
        });
    }
    else {
        nombreData = JSON.parse(localStorage.getItem("NOMBRE"))
        nombre = new Nombre(nombreData)
        personalizarNombre()
        crearCarrito()
    }
}
function personalizarNombre() {
    let titulo = document.getElementById("titulo")
    titulo.innerText = `Bienvenid@, ${nombreData}!`

}
function crearBotones() {
    const btnMenu = document.querySelector("#menu")
    menu.forEach((categoria) => {
        const miBoton = document.createElement("button");
        miBoton.setAttribute("class", `botonMenu`);
        miBoton.setAttribute("id", `btnMenu${categoria.id}`)
        miBoton.innerHTML = categoria.nombre;
        miBoton.addEventListener("click", () => mostrarPlatos(categoria.id))
        btnMenu.appendChild(miBoton)
    })

}
function aparecerCarrito() {
    const btnCarrito = document.getElementById("btnCarrito")
    btnCarrito.addEventListener("click", () => {
        let div = document.querySelector("#divCarrito")
        div.classList.toggle("activo")
    })

}

function mostrarPlatos(idCategoria) {
    const productosFiltrados = listaComidas.filter(comida => comida.categoria === idCategoria)
    const divPadre = document.querySelector("#listaMenu")
    const contenedor = document.createElement("div")
    contenedor.setAttribute("class", "div__comidas")
    contenedor.setAttribute("id", "div__padre")
    divPadre.appendChild(contenedor)
    crearMenu(productosFiltrados, idCategoria)

}
function crearMenu(productosFiltrados, idCategoria) {
    while (idCategoria == 1) {
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato) => {
            mostrarVariedades(plato, divHijo)
        })
        contador++
        contador > 1 && cerrarPlatos()
        break

    }
    while (idCategoria == 2) {
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato) => {
            mostrarVariedades(plato, divHijo)
        })
        contador++
        contador > 1 && cerrarPlatos()
        break
    }
    while (idCategoria == 3) {
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato) => {
            mostrarVariedades(plato, divHijo)
        })
        contador++
        contador > 1 && cerrarPlatos()
        break
    }
    while (idCategoria == 4) {
        const divHijo = document.querySelector(".div__comidas")
        productosFiltrados.forEach((plato) => {
            mostrarVariedades(plato, divHijo)
        })
        contador++
        contador > 1 && cerrarPlatos()
        break
    }
}
function mostrarVariedades(plato, divHijo) {
    const contenedorHijo = document.createElement("div")
    contenedorHijo.setAttribute("id", `div__hijo${plato.id}`)
    contenedorHijo.setAttribute("class", "div__hijo")
    contenedorHijo.innerHTML += `
    <h4> ${plato.tipo} ${plato.variedad}</h4> 
    <img src="${plato.imagen}" class="div__imagen" alt="Imagen de un ${plato.tipo} de ${plato.variedad}">
    <h4>$${plato.precio}</h4>
    <button class="botonCarrito" id="botonDiv+${plato.id}">Agregar al carrito</button>`
    divHijo.appendChild(contenedorHijo)
    const CardsComida = document.getElementById(`div__hijo${plato.id}`)
    CardsComida.addEventListener("click", () => agregarAlCarrito(plato))
}
function cerrarPlatos() {
    let div = document.querySelector("#listaMenu");
    let cerrar = document.querySelectorAll("#div__padre");
    cerrar.forEach((nodo) => {
        div.removeChild(nodo)
    })
    contador = 0
}
function crearCarrito() {
    const main = document.querySelector("main")
    const div = document.createElement("div")
    div.setAttribute("id", "divCarrito")
    div.innerHTML = `<div class="div__carrito"><div class="divCarrito1"><h3>${nombreData}, este es tu carrito!</h3><div><button id="btnCerrar2" class="btnCerrar2" onClick=cerrarCarrito()>X</button></div></div></div> `
    main.appendChild(div)
    // const btnCerrar = document.querySelector("#btnCerrar2")
    // btnCerrar.addEventListener("click", ()=> console.log("clicked"))
    mostrarCarrito()

}
function cerrarCarrito() {
    let div = document.querySelector("#divCarrito")
    div.classList.toggle("activo")
}
function mostrarCarrito() {
    let div = document.querySelector(".div__carrito")
    let divCarrito = document.querySelector(".div__carrito__div")
    if (divCarrito === null) {
        divCarrito = document.createElement("div");
        divCarrito.setAttribute("class", "div__carrito__div")
        div.appendChild(divCarrito)
        actualizarCarrito()
        mostrarCuentaTotal()
    }
    else {
        actualizarCarrito()
        mostrarCuentaTotal()
    }
}
function actualizarCarrito(plato, producto) {
    let contenedor = document.querySelector(".div__carrito__div")
    var prods = miCarrito.productos
    let nuevoContenedor = document.createElement("div")
    nuevoContenedor.setAttribute("class", "div__carrito__div__productos")
    contenedor.innerHTML = ""
    prods.forEach(producto => {
        let nodoDiv = document.createElement("div")
        nodoDiv.setAttribute("class", "nodoDiv")
        let resultado = producto.precio * producto.cantidad
        nodoDiv.innerHTML = `<img src="${producto.imagen}" class ="imagen__carrito"> ${producto.tipo} de ${producto.variedad} $${producto.precio} <div class="div__carrito__div__productos__botones"><span class="spanCarrito">${producto.cantidad}</span> <span class="spanCarrito">$${resultado}</span><button class="botonCarrito" id="botonDiv-${producto.id}" onclick="sacarDelCarrito(${producto})">-</button></div>`
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


function agregarAlCarrito(plato) {
    let comidaParaAgregar = listaComidas.find(el => el.id == plato.id)
    console.log(comidaParaAgregar)
    if (miCarrito.productos.includes(comidaParaAgregar)) {
        ComidaObjeto[plato.id].aumentarCantidad()
        let comidaParaAgregar = listaComidas.find(el => el.id == plato.id)
        miCarrito.addProducto(comidaParaAgregar)
        console.log(miCarrito)
        cuentaParcial += plato.precio
        Toastify({
            text: "Producto agregado al carrito con exito!",
            duration: 3000,
            gravity: "bottom",
            style:
            {
                background: "orange",
                color: "black"
            }
        }).showToast()
        Toastify({
            text: `Su cuenta parcial es: $${cuentaParcial}`,
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
    else {
        console.log("no existe wachin")
        miCarrito.addProducto(comidaParaAgregar)
        cuentaParcial += plato.precio
        Toastify({
            text: "Producto agregado al carrito con exito!",
            duration: 3000,
            gravity: "bottom",
            style:
            {
                background: "orange",
                color: "black"
            }
        }).showToast()
        Toastify({
            text: `Su cuenta parcial es: $${cuentaParcial}`,
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

}
function sacarDelCarrito(producto) {
    let comidaParaSacar = listaComidas.find(el => el.id == producto.id)
    console.log(comidaParaSacar)
    let index = miCarrito.productos.indexOf(comidaParaSacar)
    if (miCarrito.productos[index].cantidad > 1) {
        ComidaObjeto[producto.id].mermarCantidad()
        let comidaParaSacar = listaComidas.find(el => el.id == producto.id)
        console.log(comidaParaSacar)
        cuentaParcial -= producto.precio
        Toastify({
            text: "Eliminaste este producto exitosamente!",
            duration: 3000,
            gravity: "bottom",
            style:
            {
                background: "orange",
                color: "black"
            }
        }).showToast()
        Toastify({
            text: `Su cuenta parcial es: $${cuentaParcial}`,
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
    else{
        miCarrito.removeProducto(index)
        cuentaParcial -= producto.precio
        Toastify({
            text: "Eliminaste este producto exitosamente!",
            duration: 3000,
            gravity: "bottom",
            style:
            {
                background: "orange",
                color: "black"
            }
        }).showToast()
        Toastify({
            text: `Su cuenta parcial es: $${cuentaParcial}`,
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
}
function mostrarCuentaTotal() {
    let contenedor = document.querySelector(".div__carrito")
    contenedor.innerHTML += `<button class="botonCarrito" id="btnCuenta">PAGAR</button>`
    const botonCuenta = document.querySelector("#btnCuenta")
    botonCuenta.addEventListener("click", () => {
        let cuentaTotal = cuentaParcial
        swal({
            icon: "warning",
            title: `${nombreData}, gracias por elegirnos!`,
            text: `El total es: $${cuentaTotal}`,
            buttons: ["CANCELAR", "PAGAR"]
        }).then((aPagar) => {
            aPagar ? eliminarCarrito() : swal("Pago cancelado!", { icon: "error", })
        })
    })
}
function eliminarCarrito() {
    let eliminarDivCarrito = document.querySelectorAll(".nodoDiv")
    eliminarDivCarrito.forEach(nodo => {
        nodo.remove()
    })
    miCarrito.productos.splice(0, miCarrito.productos.length)
    cuentaParcial = 0
    localStorage.clear()
    swal("Pagaste!", { icon: "success", })
}
function vaciarCarrito() {
    swal({
        icon: "warning",
        title: `${nombreData}, seguro que queres vaciar tu carrito?`,
        buttons: ["CANCELAR", "VACIAR"]
    }).then((vaciar) => {
        if (vaciar) {
            let eliminarDivCarrito = document.querySelectorAll(".nodoDiv")
            eliminarDivCarrito.forEach(nodo => {
                nodo.remove()
            })
            miCarrito.productos.splice(0, miCarrito.productos.length)
            cuentaParcial = 0
            localStorage.clear()
            swal("Eliminaste tu carrito", { icon: "success", })
        }
        else {
            swal("Cancelaste la operacion!", { icon: "error", })
        }
    })
}
function crearBebidas(data) {
    const divPadre = document.querySelector("#listaMenu")
    const btnTragos = document.createElement("btn")
    btnTragos.setAttribute("class", "botonMenu"), ("id", "btnTragos")
    btnTragos.innerHTML = "CARTA DE TRAGOS"
    divPadre.appendChild(btnTragos)
    btnTragos.addEventListener("click", () => mostrarBebidas(data))


}
function mostrarBebidas(data) {
    const divPadre = document.createElement("div")
    divPadre.setAttribute("id", "divFetch")
    const main = document.querySelector("main")
    divPadre.innerHTML = `<div class="div__headerFetch"><h2>Nuestra carta de tragos solo puede ser consumida en nuestro local!</h2><button class = "btnCerrar">X</button></div>`
    main.appendChild(divPadre)
    const btnCerrar = document.querySelector(".btnCerrar")
    btnCerrar.addEventListener("click", () => cerrarPlatosFetch())
    const divHijo = document.createElement("div")
    divHijo.setAttribute("class", "divFetch__hijo")
    divPadre.appendChild(divHijo)
    data.drinks.forEach((trago) => {
        const divFetchHijo = document.createElement("div")
        divFetchHijo.setAttribute("id", "div__hijo__fetch")
        divFetchHijo.innerHTML = `
        <h3>${trago.strDrink}</h3>
        <div class="div__imagen"><img alt="Imagen de un trago ${trago.strDrink}" src ="${trago.strDrinkThumb}"></div>
        `
        divHijo.appendChild(divFetchHijo)
    })
}
function cerrarPlatosFetch() {
    const main = document.querySelector("main")
    const div = document.querySelector("#divFetch")
    main.removeChild(div)
}

// Fin de declaracion de functions
// Inicio del codigo ejecutable
iniciar()
