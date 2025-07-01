
const contenedorProducto = document.querySelector('.contenedorProductos');
const alerta = document.querySelector('.alerta');
let datosGuardados = sessionStorage.getItem('datos');
let datos = JSON.parse(datosGuardados);
let precio = Number(datos.precio.replace("$", ""));


function cargarCarta() {
    
    const carta = crearCarta(datos);
    carta.classList.remove("zoom");
    carta.innerHTML += `
        <div class="input-cantidad">
            <div>
                <button class="btn-restar">−</button>
                <input type="number" id="cantidad" class="campo-cantidad" min="1" max="20" value="1" />
                <button class="btn-sumar">+</button>
            </div>
            <p class="total">Total a pagar: </p>
        </div>
        <hr>
        <div class="btns-compra">
            <a class="btn-comprar">Pagar ahora</a>
            <a href='#'>Añadir al carrito</a>
        </div>`;
    // Añadirle a la carta (botones...)
    contenedorProducto.appendChild(carta);
}

cargarCarta();

/* LOGICA DE ACUMULACION DE PRECIO */
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".input-cantidad");
  const input = contenedor.querySelector(".campo-cantidad");
  const btnSumar = contenedor.querySelector(".btn-sumar");
  const btnRestar = contenedor.querySelector(".btn-restar");
  const btnComprar = document.querySelector('.btn-comprar');


  sumarCantidad(input, btnSumar, contenedor);
  restarCantidad(input, btnRestar, contenedor);
  
  // redigirirCompra(btnComprar);
  btnComprar.addEventListener('click', redigirirCompra);
});                                                

function sumarCantidad(input, btnSumar, contenedor) {
  btnSumar.addEventListener("click", () => {
    let valor = parseInt(input.value);
    const max = parseInt(input.max);
    
    if (valor < max) {
      input.value = valor + 1;
      contenedor.querySelector(".total").innerHTML = `Total a pagar: $${(valor + 1) * precio}`;
    }
  });
}

function restarCantidad(input, btnRestar, contenedor) {
  btnRestar.addEventListener("click", () => {
    let valor = parseInt(input.value);
    const min = parseInt(input.min);

    if (valor > min) {
      input.value = valor - 1;
      contenedor.querySelector(".total").innerHTML = `Total a pagar: $${(valor - 1) * precio}`;
    }
  });
}

function redigirirCompra() {
  if(sessionStorage.getItem('isLoggedIn') === 'true') {
    this.href = 'postcompra.html';
  } else {
    alerta.style.display = 'flex';
  }
}