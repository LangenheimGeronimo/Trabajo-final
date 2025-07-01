const main = document.getElementById("main");
let productos = document.getElementsByClassName('producto');

const categorias = [
  {
    titulo: "Hamburguesas",
    productos: [
      {
        img: "/img/productos/hamburguesa.png", 
        nombre: "Triple Hamburguesa con Queso", 
        precio: 8900,
        descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar",
        promocion: true
      },
      {
        img: "/img/productos/bigMac.png", 
        nombre: "Big Mac", 
        precio: 6600, 
        descripcion: "Dos hamburguesas de carne 100% vacuna con salsa especial, queso derretido, cebolla, lechuga fresca y pepino crocante que crean un sabor único, haciéndola la hamburguesa más famosa del mundo."
      },
      {
        img: "/img/productos/dobleCuartoQueso.png", 
        nombre: "Doble Cuarto de Libra con Queso", 
        precio: 9800, 
        descripcion: "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza."
      },
      {
        img: "/img/productos/mcnifica.png", 
        nombre: "McNífica", 
        precio: 9200, 
        descripcion: "En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa."
      }
     
    ],
  },
  {
    categoria: "Acompañamientos",
    productos: [
      {
        img: "/img/productos/papas.png", 
        nombre: "Papas fritas", 
        precio: 4500, 
        descripcion: "Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última."
      },
      {
        img: "/img/productos/papasPequenias.png", 
        nombre: "Papas pequeñas", 
        precio: 2000, 
        descripcion: "Nuestras clásicas papas fritas doradas y crocantes con la sal justa y en un porción adecuada para los niños."
      },
      {
        img: "/img/productos/papasConCheddar.png", 
        nombre: "papas Con Chedar y bacon", 
        precio: 4500, 
        descripcion: "Calientes, crujientes y deliciosas, una nueva variedad llega para quedarse: Papas Fritas con Cheddar fundido y trocitos de bacon.",
        promocion: true,
      },
      {
        img: "/img/productos/papasConTasty.png", 
        nombre: "papas con tasty", 
        precio: 3700, 
        descripcion: "Calientes, crujientes y deliciosas, una nueva variedad llega para quedarse: Papas Fritas con nuestra exclusiva salsa Tasty."
      }
    ]
  },
  {
    titulo: "bebidas",
    productos: [
      {
        img: "/img/productos/cocaColaChica.png", 
        nombre: "Coca Cola Mediana", 
        precio: 3200, 
        descripcion: "Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande."
      },
      { 
        img: "/img/productos/sprite.png", 
        nombre: "Sprite Zero Mediana (500ml)", 
        precio: 3200, 
        descripcion: "Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande."
      },
      {
        img: "/img/productos/fanta.png", 
        nombre: "Fanta Zero Mediana (500ml)", 
        precio: 3200, 
        descripcion: "Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande."
      },
      {
        img: "/img/productos/agua.png", 
        nombre: "Agua", 
        precio: 3500, 
        descripcion: "Botella de 500ml de agua mineral"
      }
    ]
  },
  {
    titulo: "postres",
    productos: [
      {
        img: "/img/productos/cono-vainilla.png", 
        nombre: "Cono de Vainilla", 
        precio: 1300, 
        descripcion: "Un clásico cono que nunca pasa de moda. La opción que todos aman por su sabor, su dulce cucurucho y su estilo tan cool.", 
        promocion: true
      },
      {
        img: "/img/productos/cono-kitkat.png", 
        nombre: "Cono KitKat", 
        precio: 1900, 
        descripcion: "Cremoso helado de vainilla, en un delicioso cucurucho, acompañado de la crujiente oblea de chocolate, la favorita de todos: Kit Kat. ¡Imposible resistirse!", 
      },
      {
        img: "/img/productos/cono-combinado.png", 
        nombre: "Cono Combinado", 
        precio: 1300, 
        descripcion: "El helado para los que lo quieren todo. Para los que no se conforman con un sabor. Un helado que combina dulce de leche, vainilla y un delicioso cucurucho.", 
      },
      {
        img: "/img/productos/cono-ddl.png", 
        nombre: "Cono de Dulce de Leche", 
        precio: 1300, 
        descripcion: "Si amás el dulce de leche, si amás el helado, si amás el cucurucho, si amás un postre que te refresque; este es tu postre.", 
        promocion: true
      },
    ]
  },
]

function crearContenedor(){
  const contenedorCategoria = document.createElement("section");
  contenedorCategoria.className = "contenedorProductos";
  return contenedorCategoria;
}

/* LOGICA DE CREACION DE CARTAS */
function cargarProductos(){
    // Si estamos en inicio 
    if(window.location.href.includes('inicio.html')) {
      // Crear un solo contenedor productos
      const contenedorPromocion = crearContenedor();
      main.appendChild(contenedorPromocion);

      // Recorremos las categorias y cada producto
      categorias.forEach(categoria => {
        categoria.productos.forEach(producto => {
          // Si el producto esta en promocion crea la carta y la mete al contenedor promocion
          if(producto.promocion) {
            const carta = crearCarta(producto);
            contenedorPromocion.appendChild(carta);
          } 
        })
      });
    }else{ // Si estamos en la pagina productos
      // Recorremos las categorias
      categorias.forEach(categoria => {
        // Por cada categoria creamos un div que va contener los productos
        const categoriaDiv = crearContenedor();
        main.appendChild(categoriaDiv);

        // De cada categoria recorremos sus productos
        categoria.productos.forEach(producto => {
          // Crea la carta por cada producto
          const carta = crearCarta(producto);
          categoriaDiv.appendChild(carta);
          });
      });
    }
}

// Una vez cargados los productos
cargarProductos();

// Redirige a la compra 
function redirigirFormulario(){
  let datos = {
    img: this.children[0].src,
    nombre: this.children[1].children[0].innerHTML,
    precio: this.children[1].children[1].innerHTML,
    descripcion: this.children[1].children[2].innerHTML,
  }
  sessionStorage.setItem('datos', JSON.stringify(datos));
  
  window.location.href = 'compra.html';
} 

for(let i = 0; i < productos.length; i++){
  productos[i].addEventListener("click", redirigirFormulario);
}



