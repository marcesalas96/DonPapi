let nombreData = JSON.parse(localStorage.getItem("NOMBRE"))
if (!nombreData) {
    const preguntoNombre = prompt("Ingresa tu nombre!")
    nombre = new Nombre(preguntoNombre)
    nombre.guardarNombre(preguntoNombre)
}
else {
    nombre = new Nombre(nombreData)
}
nombreData = JSON.parse(localStorage.getItem("NOMBRE"))

const data = JSON.parse(localStorage.getItem("MI_CARRITO"))
let miCarrito = new Carrito([])
!data ? miCarrito = new Carrito([]) : miCarrito = new Carrito(data)
let cuentaCarrito = miCarrito.productos.reduce((acc, elemento) => acc += elemento.precio, 0)
let cuentaParcial = cuentaCarrito

const caloriasTacos = []
const caloriasBurritos = []
const caloriasPostres = []
const caloriasBebidas = []


// ---------INCLUYENDO FETCH---------
const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'food-calorie-data-search.p.rapidapi.com',
        'X-RapidAPI-Key': '52b86ff42cmsh87019ee0724af27p13ec6ajsn9f3ff52883b9'
    }
};

fetch('https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=%20taco', options1)
    .then(response => response.json())
    .then(response => {for (item of response){
        caloriasTacos.push(item)
    }})
    .catch(err => console.error(err));
    console.log(caloriasTacos)
    for (elemento of caloriasTacos){
        console.log(elemento.id)
    }

    const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'food-calorie-data-search.p.rapidapi.com',
        'X-RapidAPI-Key': '52b86ff42cmsh87019ee0724af27p13ec6ajsn9f3ff52883b9'
    }
};
fetch('https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=%20burrito', options2)
    .then(response => response.json())
    .then(response => response.forEach((item) => {
        caloriasBurritos.push(item.energ_kcal + " calorias")
    }))
    .catch(err => console.error(err));

const options3 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'food-calorie-data-search.p.rapidapi.com',
        'X-RapidAPI-Key': '52b86ff42cmsh87019ee0724af27p13ec6ajsn9f3ff52883b9'
    }
};

fetch('https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=brownie', options3)
    .then(response => response.json())
    .then(response => response.forEach((item) => {
        caloriasPostres.push(item.energ_kcal + " calorias")
    }))
    .catch(err => console.error(err));

const options4 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'food-calorie-data-search.p.rapidapi.com',
        'X-RapidAPI-Key': '52b86ff42cmsh87019ee0724af27p13ec6ajsn9f3ff52883b9'
    }
};

fetch('https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=coca-cola', options4)
    .then(response => response.json())
    .then(response => response.forEach((item) => {
        caloriasBebidas.push(item.energ_kcal + " calorias")
    }))
    .catch(err => console.error(err));

//Construyendo Objetos 
const variedadBurrito = new Variedad(1, "Burritos")
const variedadTaco = new Variedad(2, "Tacos")
const variedadPostre = new Variedad(3, "Postres")
const variedadBebida = new Variedad(4, "Bebidas")
const burritoCarne = new Burritos(1, "Burrito", "Carne", 650, 1, "media/burrito.jpg", 1, `${caloriasBurritos[0]}`)
const burritoCerdo = new Burritos(2, "Burrito", "Cerdo", 570, 1, "media/burritoCerdo.jpg", 1)
const burritoPollo = new Burritos(3, "Burrito", "Pollo", 500, 1, "media/burritoPollo.jpg", 1)
const burritoVeggie = new Burritos(4, "Burrito", "Veggie", 520, 1, "media/burritoVeggie.jpg", 1)
const tacoPastor = new Tacos(5, "Taco", "Pastor", 580, 2, "media/tacoPastor.jpg", 1)
const tacoCerdo = new Tacos(6, "Taco", "Cerdo", 550, 2, "media/tacosCerdo.jpg", 1)
const tacoMixto = new Tacos(7, "Taco", "Pollo", 500, 2, "media/tacoPollo.jpg", 1)
const tacoVeggie = new Tacos(8, "Taco", "Veggie", 400, 2, "media/tacoVeggie.jpg")
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

