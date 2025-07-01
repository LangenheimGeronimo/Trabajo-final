
const contenedorProducto = document.querySelector('.contenedorProductos');

function cargarCarta() {
    let datosGuardados = sessionStorage.getItem('datos');
    let datos = JSON.parse(datosGuardados);
    
    const carta = crearCarta(datos);
    carta.classList.remove("zoom");
    carta.innerHTML += `
        <div class="input-cantidad">
            <div>
                <button class="btn-restar">−</button>
                <input type="number" id="cantidad" class="campo-cantidad" min="1" max="20" value="0" />
                <button class="btn-sumar">+</button>
            </div>
            <p class="total">Total a pagar:  $0</p>
        </div>
        <hr>
        <div class="btns-compra">
            <a href='postcompra.html'>Pagar ahora</a>
            <a href='#'>Añadir al carrito</a>
        </div>`;
    // Añadirle a la carta (botones...)
    contenedorProducto.appendChild(carta);
}

cargarCarta();

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
