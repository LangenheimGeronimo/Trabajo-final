
let body = document.getElementById('main');

function cargarCarta() {
    let datosGuardados = sessionStorage.getItem('datos');
    let datos = JSON.parse(datosGuardados);

    const carta = crearCarta(datos);
    carta = ''
    body.appendChild(carta);
}

cargarCarta();