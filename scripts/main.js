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


function mostrarPlatos(idCategoria){
    const productosFiltrados = listaComidas.filter(comida=> comida.categoria === idCategoria)
    const divPadre = document.querySelector("#listaMenu")
    const contenedor =document.createElement("div")
    if (idCategoria==1){
        contenedor.setAttribute("class","div__burritos")
        contenedor.setAttribute("id","div__padre")
        divPadre.appendChild(contenedor)
    }
    else if (idCategoria==2){
        contenedor.setAttribute("class","div__tacos")
        contenedor.setAttribute("id","div__padre")
        divPadre.appendChild(contenedor)
    }
    else if (idCategoria==3){
        contenedor.setAttribute("class","div__postres")
        contenedor.setAttribute("id","div__padre")
        divPadre.appendChild(contenedor)
    }
    else if (idCategoria==4){
        contenedor.setAttribute("class","div__bebidas")
        contenedor.setAttribute("id","div__padre")
        divPadre.appendChild(contenedor)
    }
    crearMenu(productosFiltrados,idCategoria)
    
}
function crearMenu(productosFiltrados,idCategoria){
    while (idCategoria==1){
        const divHijo = document.querySelector(".div__burritos")
        productosFiltrados.forEach((plato)=>{
            const contenedorHijo = document.createElement("div")
            contenedorHijo.setAttribute("id","div__hijo")
            contenedorHijo.innerHTML=`<p> 
            ${plato.id}) ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
            </p> <img src="${plato.imagen}" class="div__imagen" alt="Imagen de un burrito de ${plato.variedad}"> <div class="div__botones"><button class="botonMenu" id="botonDiv">+</button><button class="botonMenu" id="botonDiv">-</button></div>`
            divHijo.append(contenedorHijo)
        })
        contador++
        if (contador>1){
            cerrarPlatos()
        }
        break
        
    }
    while (idCategoria==2){
        const divHijo = document.querySelector(".div__tacos")
        productosFiltrados.forEach((plato)=>{
            const contenedorHijo = document.createElement("div")
            contenedorHijo.setAttribute("id","div__hijo")
            contenedorHijo.innerHTML=`<p> 
            ${plato.id}) ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
            </p> <img src="${plato.imagen}" class="div__imagen" alt="Imagen de un burrito de ${plato.variedad}">`
            divHijo.append(contenedorHijo)
        })
        contador++
        console.log(contador)
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
    while (idCategoria==3){
        const divHijo = document.querySelector(".div__postres")
        productosFiltrados.forEach((plato)=>{
            const contenedorHijo = document.createElement("div")
            contenedorHijo.setAttribute("id","div__hijo")
            contenedorHijo.innerHTML=`<p> 
            ${plato.id}) ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
            </p> <img src="${plato.imagen}" class="div__imagen" alt="Imagen de un burrito de ${plato.variedad}">`
            divHijo.append(contenedorHijo)
        })
        contador++
        console.log(contador)
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
    while (idCategoria==4){
        const divHijo = document.querySelector(".div__bebidas")
        productosFiltrados.forEach((plato)=>{
            const contenedorHijo = document.createElement("div")
            contenedorHijo.setAttribute("id","div__hijo")
            contenedorHijo.innerHTML=`<p> 
            ${plato.id}) ${plato.tipo} ${plato.variedad}, precio: $${plato.precio}
            </p> <img src="${plato.imagen}" class="div__imagen" alt="Imagen de un burrito de ${plato.variedad}">`
            divHijo.append(contenedorHijo)
        })
        contador++
        if (contador>1){
            cerrarPlatos()
        }
        break
    }
}
function cerrarPlatos(){
    let div = document.querySelector("#listaMenu");
    console.log(div)
    let cerrar= document.querySelectorAll("#div__padre");
    cerrar.forEach((nodo)=>{
        div.removeChild(nodo)})
    contador=0
}

// Fin de declaracion de functions
// Inicio del codigo ejecutable
iniciar()
