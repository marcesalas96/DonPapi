let nombreData = JSON.parse(localStorage.getItem("NOMBRE"))
const data = JSON.parse(localStorage.getItem("MI_CARRITO"))
!data ? miCarrito = new Carrito([]) : miCarrito = new Carrito(data)
console.log(data)
let cuentaCarrito = miCarrito.productos.reduce((acc, elemento) => acc += elemento.precio, 0)
let cuentaParcial = cuentaCarrito

const caloriasTacos = []
const caloriasBurritos = []
const caloriasPostres = []
const caloriasBebidas = []



//Construyendo Objetos 
const variedadBurrito = new Variedad(1, "Burritos")
const variedadTaco = new Variedad(2, "Tacos")
const variedadPostre = new Variedad(3, "Postres")
const variedadBebida = new Variedad(4, "Bebidas")
const burritoCarne = new Burritos(1, "Burrito", "Carne", 650, 1, "media/burrito.jpg", 1,)
const burritoCerdo = new Burritos(2, "Burrito", "Cerdo", 570, 1, "media/burritoCerdo.jpg", 1)
const burritoPollo = new Burritos(3, "Burrito", "Pollo", 500, 1, "media/burritoPollo.jpg", 1)
const burritoVeggie = new Burritos(4, "Burrito", "Veggie", 520, 1, "media/burritoVeggie.jpg", 1)
const tacoPastor = new Tacos(5, "Taco", "Pastor", 580, 2, "media/tacoPastor.jpg", 1)
const tacoCerdo = new Tacos(6, "Taco", "Cerdo", 550, 2, "media/tacosCerdo.jpg", 1)
const tacoMixto = new Tacos(7, "Taco", "Pollo", 500, 2, "media/tacoPollo.jpg", 1)
const tacoVeggie = new Tacos(8, "Taco", "Veggie", 400, 2, "media/tacoVeggie.jpg",1)
const postreBanana = new Postres(9, "Postre", "Banana con tequila", 350, 3, "media/bananaTequila.jpg", 1)
const postreBrownie = new Postres(10, "Postre", "Brownie con helado", 430, 3, "media/brownieHelado.jpg", 1)
const postreHelado = new Postres(11, "Postre", "Helado de Dulce de leche", 350, 3, "media/heladoDDL.jpg", 1)
const postreVolcan = new Postres(12, "Postre", "Volcan de chocolate", 450, 3, "media/volcanChoco.jpg", 1)
const bebidaCoca = new Bebidas(13, "Bebida", "Coca-Cola", 150, 4, "media/cocaCola.jpg", 1)
const bebidaTrago = new Bebidas(14, "Bebida", "Margarita", 300, 4, "media/margarita.jpg", 1)


// Declaracion variables
let contador = 0
let comidas = []
let comidaParaAgregar = []
const menu = []
menu.push(variedadBurrito, variedadTaco, variedadPostre, variedadBebida)
const listaComidas = []
listaComidas.push(burritoCarne, burritoCerdo, burritoPollo, burritoVeggie, tacoPastor, tacoCerdo, tacoMixto, tacoVeggie, postreBanana, postreBrownie, postreHelado, postreVolcan, bebidaCoca, bebidaTrago)
listaComidas.forEach(comida => {
    comidas.push({ id: comida.id, tipo: comida.tipo, variedad: comida.variedad, precio: comida.precio, imagen: comida.imagen, cantidad: comida.cantidad })
});

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila')
.then((response) => response.json())
.then((data) => crearBebidas(data))

const ComidaObjeto = {
    1: burritoCarne,
    2:burritoCerdo,
    3:burritoPollo,
    4:burritoVeggie,
    5:tacoPastor,
    6:tacoCerdo,
    7:tacoMixto,
    8:tacoVeggie,
    9:postreBanana,
    10:postreBrownie,
    11:postreHelado,
    12:postreVolcan,
    13:bebidaCoca,
    14:bebidaTrago
}
