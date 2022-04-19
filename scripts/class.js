class Variedad{
    constructor(id, nombre){
        this.id= id
        this.nombre= nombre
    }
}
class Burritos{
    constructor (id, tipo, variedad, precio, categoria,imagen){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
        this.imagen=imagen
    }
}
class Tacos{
    constructor (id, tipo, variedad, precio, categoria,imagen){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
        this.imagen=imagen
    }
}
class Postres{
    constructor (id, tipo, variedad, precio, categoria, imagen){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
        this.imagen=imagen
    }
}
class Bebidas{
    constructor (id, tipo, variedad, precio, categoria, imagen){ 
        this.id=id
        this.tipo=tipo
        this.variedad=variedad
        this.precio=precio
        this.categoria=categoria
        this.imagen=imagen
    }
}
class Carrito{
    constructor(productos){
        this.productos=productos
    }
    addProducto(producto){
        let mapped = this.productos.map(element=>element.producto)
        let enCarrito = mapped.find(element=>element.id===producto.id)
        if(!enCarrito){
            this.productos.push({cantidad:1, producto})
        }
        else{
            let indexed = mapped.map(element=>element.id)
            let index = indexed.indexOf(producto.id)
            this.productos[index].cantidad+=1
        }
        console.log(this.productos)
    }
    guardar()
    {
        localStorage.setItem("MI_CARRITO", JSON.stringify(this.productos))
    }
}