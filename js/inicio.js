//LOGICA DE CREACION DE PROMOCIONES
const containerPromociones = document.querySelector(".contenedorProductos");

// Funcion para cargar las promociones
function cargarPromociones(){
    // Recorremos cada categoria
    categorias.forEach(categoria => {
        // Por cada categoria recorremos todos los productos
        categoria.productos.forEach(producto => {
            // Si algun producto esta en promocion
            if (producto.promocion) {
                // Creamos la card para la promocion
                // crearCarta();
                const carta = crearCarta(producto);
                containerPromociones.appendChild(carta);
            }
        })
    });
}

// Llamamos a la funcion para cargar las promociones
cargarPromociones();