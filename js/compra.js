// Agarramos los elementos del DOM
const contenedorProductos = document.getElementById("menu");


/* LOGICA DE CREACION DE CARTAS */
function cargarProductos(){
  // Recorremos los productos y por cada uno creamos
  productos.forEach(seccion => {
    // Por cada seccion creamos un div contenedor
    // y un h1 con el titulo de la seccion
    const seccionDiv = document.createElement("section");
    seccionDiv.className = "container";

    const h1 = document.createElement("h1");
    h1.textContent = seccion.titulo;

    contenedorProductos.appendChild(h1);
    contenedorProductos.appendChild(seccionDiv);

    // Recorremos los productos de la seccion
    seccion.productos.forEach(prod => {
      const article = document.createElement("article");
      article.className = "product-container";

      article.innerHTML = `
        <img src="${prod.img}" alt="imagen de ${prod.nombre}">
        <div class="product-details">
            <h2>${prod.nombre}</h2>
            <h3>$${prod.precio}</h3>
            <p>${prod.descripcion}</p>
        </div>
        <div class="input-cantidad">
            <div>
                <button class="btn-restar">−</button>
                <input type="number" class="campo-cantidad" min="1" max="20" value="0" />
                <button class="btn-sumar">+</button>
            </div>
            <p class='total'>Total a pagar: $0</p>
        </div>
        <hr>
        <div class="btns-compra">
            <a href='postcompra.html'>Pagar ahora</a>
            <a href='#'>Añadir al carrito</a>
        </div>
      `;

      seccionDiv.appendChild(article);
    });
  });
}

cargarProductos();



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
