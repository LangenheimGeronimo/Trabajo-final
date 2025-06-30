/* LOGICA DE CREACION DE CARTAS */
const main = document.getElementById("main");

function cargarProductos(){
  // Recorremos las categorias
  categorias.forEach(categoria => {
    // Por cada categoria creamos un div que va contener los productos
    const categoriaDiv = document.createElement("section");
    categoriaDiv.className = "contenedorProductos";
    main.appendChild(categoriaDiv);

    // De cada cateogira recorremos sus productos
    categoria.productos.forEach(producto => {
      const carta = crearCarta(producto);
      categoriaDiv.appendChild(carta);
    });
  });
}

// Una vez cargados los productos
cargarProductos();

// Agarrar las cartas de los productos y agregarle el addEventListener
let productos = document.getElementsByClassName('producto');
for(let i = 0; i < productos.length; i++){
  productos[i].addEventListener("click", redirigirFormulario);
}

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

/* LOGICA DE ACUMULACION DE PRECIO */
document.addEventListener("DOMContentLoaded", () => {
  const contenedores = document.querySelectorAll(".input-cantidad");

  contenedores.forEach((contenedor) => {
    const input = contenedor.querySelector(".campo-cantidad");
    const btnSumar = contenedor.querySelector(".btn-sumar");
    const btnRestar = contenedor.querySelector(".btn-restar");

    btnSumar.addEventListener("click", () => {
      let valor = parseInt(input.value);
      const max = parseInt(input.max);

      if (valor < max) {
        input.value = valor + 1;
        contenedor.querySelector(".total").innerHTML = `Total a pagar: $${(valor + 1) * 9899}`;
      }
    });

    btnRestar.addEventListener("click", () => {
      let valor = parseInt(input.value);
      const min = parseInt(input.min);

      if (valor >= min) {
        input.value = valor - 1;
        contenedor.querySelector(".total").innerHTML = `Total a pagar: $${(valor - 1) * 9899}`;
      }
    });
  });
});
