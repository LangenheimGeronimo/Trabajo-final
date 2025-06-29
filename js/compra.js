/* LOGICA DE CREACION DE CARTAS */
const menu = [
  {
    titulo: "Hamburguesas",
    productos: [
      {img: "/img/hamburguesa.png", nombre: "triple con queso", precio: 10500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar"},
      {img: "/img/big-mac.png", nombre: "Big Mac", precio: 8500, descripcion: "Dos hamburguesas de carne 100% vacuna con salsa especial, queso derretido, cebolla, lechuga fresca y pepino crocante que crean un sabor único, haciéndola la hamburguesa más famosa del mundo."},
    ],
  },
  {
    titulo: "Acompañamientos",
    productos: [
      {img: "/img/papas.png", nombre: "Papas fritas", precio: 4500, descripcion: "Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última."},
      {img: "/img/ensalada.png", nombre: "Ensalada", precio: 5000, descripcion: "Una opción para los que saben que una ensalada no es aburrida. Para los que saben que nuestras ensaladas son mucho más que verduras. Son las mejores variedades de hojas verdes y tomates Cherrys, ansiosas por acompañar tu hamburguesa."}
    ]
  },
  {
    titulo: "Bebidas",
    productos: [
      {img: "/img/cocaCola.png", nombre: "Coca cola", precio: 2700, descripcion: ""},
      {img: "/img/agua.png", nombre: "Agua sin gas (500ml)", precio: 2000, descripcion: ""}
    ]
  },
  {
    titulo: "Postres",
    productos: [
      {img: "/img/hamburguesa.png", nombre: "triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar"},
    ]
  },
  {
    titulo: "Desayunos",
    productos: [
      {img: "/img/hamburguesa.png", nombre: "triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar"},
    ]
  },
]

const contenedor = document.getElementById("menu");

menu.forEach(seccion => {
  const seccionDiv = document.createElement("section");
  seccionDiv.className = "container";

  const h1 = document.createElement("h1");
  h1.textContent = seccion.titulo;

  contenedor.appendChild(h1);
  contenedor.appendChild(seccionDiv);

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
