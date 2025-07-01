const btnMenu = document.querySelector('.btn-menu');
const isLoggedIn = sessionStorage.getItem('isLoggedIn');

btnMenu.addEventListener('click', () => {
    let content = document.querySelector('.dropdown-content');
    content.classList.toggle('content');
})

// En cada pagina verifica si esta logeado para cargar el boton del header
if(isLoggedIn === 'true') {
    setLoggedInState();
}

// Cambio de estado del boton de 'acceder' a 'mi cuenta' una vez el usuario se registro o inicio sesion
function setLoggedInState() {
    document.querySelectorAll('.cuenta').forEach((cuenta) => {
        cuenta.innerHTML = 'Mi Cuenta';
        cuenta.href = 'inicio.html';
    });
}

// Funcion para crear cartas
function crearCarta(producto){
  const carta = document.createElement("article");

  // Verifica si el producto esta en promocion le agrega clase promocion
  if(producto.promocion){
    carta.className = "producto zoom promocion";
  }else{
    carta.className = "producto zoom";
  }
 
  carta.innerHTML = `
    <img src="${producto.img}" alt="imagen de ${producto.nombre}">
    <div class="product-details">
        <h2>${producto.nombre}</h2>
        <h3>$${producto.precio}</h3>
        <p>${producto.descripcion}</p>
    </div>
  `;
  return carta;
}