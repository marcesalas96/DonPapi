            //Construyendo Objetos 
            const variedadBurrito = new Variedad(1,"Burritos")
            const variedadTaco = new Variedad(2,"Tacos")
            const variedadPostre = new Variedad(3,"Postres")
            const variedadBebida = new Variedad(4,"Bebidas")
            const burritoCarne = new Burritos(1,"Burrito","Carne",650,1,"../media/burrito.jpg")
            const burritoCerdo = new Burritos(2,"Burrito","Cerdo",570,1,"../media/burritoCerdo.jpg")
            const burritoPollo = new Burritos(3,"Burrito","Pollo",500,1,"../media/burritoPollo.jpg")
            const burritoVeggie = new Burritos(4,"Burrito","Veggie",520,1,"../media/burritoVeggie.jpg")
            const tacoPastor = new Tacos(5,"Taco","Pastor",580,2, "../media/tacoPastor.jpg")
            const tacoCerdo = new Tacos(6,"Taco","Cerdo",550,2 ,"../media/tacosCerdo.jpg")
            const tacoMixto = new Tacos(7,"Taco","Pollo",500,2 ,"../media/tacoPollo.jpg")
            const tacoVeggie = new Tacos(8,"Taco","Veggie",400,2, "../media/tacoVeggie.jpg")
            const postreBanana = new Postres(9,"Postre", "Banana con tequila",350,3, "../media/bananaTequila.jpg")
            const postreBrownie = new Postres(10,"Postre","Brownie con helado",430,3, "../media/brownieHelado.jpg")
            const postreHelado = new Postres(11,"Postre","Helado de Dulce de leche",350,3, "../media/heladoDDL.jpg")
            const postreVolcan = new Postres(12,"Postre","Volcan de chocolate",450,3, "../media/volcanChoco.jpg")
            const bebidaCoca = new Bebidas(13,"Bebida","Coca-Cola",150,4, "../media/cocaCola.jpg")
            const bebidaTrago = new Bebidas(14,"Bebida","Margarita",300,4, "../media/margarita.jpg")
            let miCarrito = new Carrito([])
            // Declaracion variables
let cuentaParcial = 0
let cuentaTotal = 0
let contador = 0
let comidas=[]
const nombre=prompt("Ingresa tu nombre!")
const data = JSON.parse(localStorage.getItem("MI__CARRITO"))

const menu = []
menu.push(variedadBurrito,variedadTaco,variedadPostre,variedadBebida)
const listaComidas = []
listaComidas.push(burritoCarne,burritoCerdo,burritoPollo,burritoVeggie,tacoPastor,tacoCerdo,tacoMixto,tacoVeggie,postreBanana,postreBrownie,postreHelado,postreVolcan,bebidaCoca,bebidaTrago)
listaComidas.forEach(comida => {
    comidas.push({id: comida.id, tipo: comida.tipo, variedad: comida.variedad, precio: comida.precio })
});
