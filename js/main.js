let btnMenu = document.querySelector('.btn-menu');




/* LISTA DE LOS PRODUCTOS AGREGADOS: */
const categorias = [
  {
    titulo: "Hamburguesas",
    productos: [
      {
        img: "/img/hamburguesa.png", 
        nombre: "triple con queso", 
        precio: 10500, 
        descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar"
      },
      {
        img: "/img/big-mac.png", 
        nombre: "Big Mac", 
        precio: 8500, 
        descripcion: "Dos hamburguesas de carne 100% vacuna con salsa especial, queso derretido, cebolla, lechuga fresca y pepino crocante que crean un sabor único, haciéndola la hamburguesa más famosa del mundo."
      },
    ],
  },
  {
    categoria: "Acompañamientos",
    productos: [
      {img: "/img/papas.png", nombre: "Papas fritas", precio: 4500, descripcion: "Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última."},
      {img: "/img/ensalada.png", nombre: "Ensalada", precio: 5000, descripcion: "Una opción para los que saben que una ensalada no es aburrida. Para los que saben que nuestras ensaladas son mucho más que verduras. Son las mejores variedades de hojas verdes y tomates Cherrys, ansiosas por acompañar tu hamburguesa."}
    ]
  },
  {
    titulo: "bebidas",
    productos: [
      {img: "/img/cocaCola.png", nombre: "Coca cola", precio: 2700, descripcion: ""},
      {img: "/img/agua.png", nombre: "Agua sin gas (500ml)", precio: 2000, descripcion: ""}
    ]
  },
  {
    titulo: "postres",
    productos: [
      {img: "/img/kitKat.png", nombre: "McFlurry Kit Kat", precio: 3700, descripcion: "La crocante oblea de chocolate que todo el mundo conoce y ama, pero acompañada de un cremoso helado de vainilla y una deliciosa salsa tibia de chocolate. ¿Hace falta que te diga más? El break helado que esperabas.", promocion: true},
      {img: "/img/sundae.png", nombre: "Sundae de chocolate", precio: 3000, descripcion: "El exquisito helado de vainilla que ya conoces y te encanta, pero bañado de una salsa de dulce de leche que te encantará aún más.", promocion: true},
    ]
  },
  {
    titulo: "Desayuno",
    productos: [
      {img: "/img/", nombre: "triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar"},
      {img: "/img/", nombre: "McFlurry", precio: 3000, descripcion: "Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.", promocion: true},
    ]
  },
]

btnMenu.addEventListener('click', () => {
    let content = document.querySelector('.dropdown-content');
    content.classList.toggle('content');
})

// Funcion para crear cartas
function crearCarta(producto){
  const carta = document.createElement("article");
  carta.className = "producto";
  carta.innerHTML = `
    <img src="${producto.img}" alt="imagen de ${producto.nombre}">
    <div class="product-details">
        <h2>${producto.nombre}</h2>
        <h3>${producto.precio}</h3>
        <p>${producto.descripcion}</p>
    </div>
  `;
  return carta;
}
