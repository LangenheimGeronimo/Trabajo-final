let button = document.querySelector('.btn-menu');
let formRegistro = document.querySelector('#formRegistro');
let formLogin = document.querySelector('#formLogin');

let datosSesion;

const isLoggedIn = sessionStorage.getItem('isLoggedIn');

if(isLoggedIn === 'true') {
    setLoggedInState();
}

button.addEventListener('click', () => {
    let content = document.querySelector('.dropdown-content');
    content.classList.toggle('content');
})

// Comprobando si los formularios existen, ya que al compartir un mismo archivo js los archivos de registro y login,
// Puede dar error al ejecutar ya que alguno de los dos no va a ser encontrado.
if(formRegistro) {
    formRegistro.addEventListener('submit', obtenerDatosRegistro);
}

if(formLogin) {
    formLogin.addEventListener('submit', obtenerDatosLogin);
}
// Simulando la obtencion de los datos del registro para guardarlo
function obtenerDatosRegistro(event) {
    event.preventDefault();

    if(sessionStorage.getItem('isLoggedIn') === 'true') {
        return;
    }

    let formData = new FormData(formRegistro);
    datosSesion = {
        correo: formData.get('correo'),
        contrasena: formData.get('contrasena')
    };

    sessionStorage.setItem('isLoggedIn', 'true');
    setLoggedInState();
    window.location.href = 'inicio.html';
}
// Simulando el login del usuario
function obtenerDatosLogin(event) {
    console.log('entra');
    
    event.preventDefault();

    if(sessionStorage.getItem('isLoggedIn') === 'true') {
        return;
    }

    sessionStorage.setItem('isLoggedIn', 'true');
    setLoggedInState();
    window.location.href = 'inicio.html';
}
// Cambio de estado del boton de 'acceder' a 'mi cuenta' una vez el usuario se registro o inicio sesion
function setLoggedInState() {
    document.querySelectorAll('.cuenta').forEach((cuenta) => {
        cuenta.innerHTML = 'Mi Cuenta';
        cuenta.href = 'inicio.html';
    });
}