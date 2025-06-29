// Agarramos los elementos del DOM
const containerPromociones = document.getElementById("containerPromociones");

// Funcion para cargar las promociones
function cargarPromociones(){
    // Recorremos cada seccion de productos
    productos.forEach(seccion => {
        // Por cada seccion recorremos todos los productos
        seccion.productos.forEach(producto => {
            // Si algun producto esta en promocion
            if (producto.promocion) {
                // Creamos la card para la promocion
                const productoPromocion = document.createElement("article");
                productoPromocion.className = "product-container";

                // Agregamos el contenido de la promocion
                productoPromocion.innerHTML = `
                <img src="${producto.img}" alt="imagen de ${producto.nombre}">
                <div class="product-details">
                    <h2>${producto.nombre}</h2>
                    <h3>$${producto.precio}</h3>
                    <p>${producto.descripcion}</p>
                </div>
                    <div class="btns-compra">
                    <a href='#'>Añadir al carrito</a>
                </div>
            `;

            containerPromociones.appendChild(productoPromocion);
            }
        })
    });
}

// Llamamos a la funcion para cargar las promociones
cargarPromociones();