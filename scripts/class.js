class Variedad{
    constructor(id, nombre){
        this.id= id
        this.nombre= nombre
    }
}
class Burritos{
    constructor (id, tipo, variedad, precio, categoria,imagen, cantidad){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
        this.imagen=imagen
        this.cantidad = cantidad
    }
    aumentarCantidad(){
        this.cantidad+=1
    }
    mermarCantidad(){
        this.cantidad-=1
    }
    reiniciarCantidad(){
        this.cantidad=1
    }
}
class Tacos{
    constructor (id, tipo, variedad, precio, categoria,imagen, cantidad){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
        this.imagen=imagen
        this.cantidad = cantidad
    }
    aumentarCantidad(){
        this.cantidad+=1
    }
    mermarCantidad(){
        this.cantidad-=1
    }
    reiniciarCantidad(){
        this.cantidad=1
    }
}
class Postres{
    constructor (id, tipo, variedad, precio, categoria, imagen, cantidad){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
        this.imagen=imagen
        this.cantidad = cantidad
    }
    aumentarCantidad(){
        this.cantidad+=1
    }
    mermarCantidad(){
        this.cantidad-=1
    }
    reiniciarCantidad(){
        this.cantidad=1
    }
}
class Bebidas{
    constructor (id, tipo, variedad, precio, categoria, imagen, cantidad){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
        this.imagen=imagen
        this.cantidad = cantidad
    }
    aumentarCantidad(){
        this.cantidad+=1
    }
    mermarCantidad(){
        this.cantidad-=1
    }
    reiniciarCantidad(){
        this.cantidad=1
    }
}

class Carrito{
    constructor(productos){
        this.productos=productos
    }
    addProducto(producto){
        if(this.productos.includes(producto)){
            const indice = this.productos.indexOf(producto)
            this.productos[indice]=producto
        }
        else{
            this.productos.push(producto)
        }
    }
    guardar(){
        localStorage.setItem("MI_CARRITO", JSON.stringify(this.productos))
    }
    removeProducto(index){
        this.productos.splice(index,1)
    }

}
class Nombre{
    constructor(nombre){
        this.nombre=nombre
    }
    guardarNombre(nombre){
        localStorage.setItem("NOMBRE", JSON.stringify(this.nombre))
    }
    
}