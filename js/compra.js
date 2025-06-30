
const contenedorProducto = document.querySelector('.contenedorProductos');

function cargarCarta() {
    let datosGuardados = sessionStorage.getItem('datos');
    let datos = JSON.parse(datosGuardados);
    
    const carta = crearCarta(datos);
    carta.classList.remove("zoom");
    
    // Añadirle a la carta (botones...)
    contenedorProducto.appendChild(carta);
}

cargarCarta();