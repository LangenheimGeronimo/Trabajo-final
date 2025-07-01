const resenias = [
  {
    imagen: "/img/big-mac.png",
    titulo: 'Big Mac',
    comentarios: [
      {
        nombre: "Emanuel San Roman", 
        puntuacion: 1,
        comentario: 'muy fea.'
      },
      {
        nombre: "Geronimo Langenheim", 
        puntuacion: 4,
        comentario: 'muy buena.'
      },
      {
        nombre: "Ciro Salaberry", 
        puntuacion: 5,
        comentario: '.'
      },
      {
        nombre: "Emanuel San Roman", 
        puntuacion: 1,
        comentario: 'muy fea.'
      },
      {
        nombre: "Geronimo Langenheim", 
        puntuacion: 4,
        comentario: 'muy buena.'
      },
      {
        nombre: "Ciro Salaberry", 
        puntuacion: 5,
        comentario: '.'
      },
      {
        nombre: "Ciro Salaberry", 
        puntuacion: 5,
        comentario: '.'
      },
    ]
  },
  {
    imagen: "/img/kitKat.png",
    titulo: 'McFlurry Kit Kat',
    comentarios: [
      {
        nombre: "Emanuel San Roman", 
        puntuacion: 1,
        comentario: 'muy fea.'
      },
      {
        nombre: "Geronimo Langenheim", 
        puntuacion: 4,
        comentario: 'muy buena.'
      },
      {
        nombre: "Ciro Salaberry", 
        puntuacion: 5,
        comentario: '.'
      },
      {
        nombre: "Emanuel San Roman", 
        puntuacion: 1,
        comentario: 'muy fea.'
      },
      {
        nombre: "Geronimo Langenheim", 
        puntuacion: 4,
        comentario: 'muy buena.'
      },
      {
        nombre: "Ciro Salaberry", 
        puntuacion: 5,
        comentario: '.'
      },
      {
        nombre: "Ciro Salaberry", 
        puntuacion: 5,
        comentario: '.'
      },
    ]
  },
  
]



function cargarResenias(){
  
  resenias.forEach(resenia => {
    const section = document.createElement("section");
    const divContenedor = document.createElement("div");
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const divTitulo = document.createElement('div');
    
    image.src = resenia.imagen;
    divContenedor.className = "primer-contenedor";
    divTitulo.className = 'divTitulo';
    title.innerHTML = resenia.titulo;

    divTitulo.appendChild(title);
    divTitulo.appendChild(image);
    section.appendChild(divTitulo);
    section.appendChild(divContenedor);
    if(resenias.indexOf(resenia) != resenias.length-1) {
      section.appendChild(document.createElement('hr'));
    }
    document.querySelector('main').appendChild(section);

    resenia.comentarios.forEach(comentario => {

        const resenia = crearResenia(comentario); 
        divContenedor.appendChild(resenia);

    });
  });
}

cargarResenias();

function crearResenia(comentario){
  const contenedor = document.createElement("article");
  contenedor.className = "contenedor-opinion";
  
  let puntuacion = "";
  puntuacion += `<img src="/img/logo-puntuacion.png">`.repeat(comentario.puntuacion) + `<img src="/img/logo-gris.png">`.repeat(5 - comentario.puntuacion);


  contenedor.innerHTML = `
                <div>
                    <h4>${comentario.nombre}</h4>
                    <div>
                        ${puntuacion}
                    </div>
                </div>

                <p>${comentario.comentario}</p>
            `;
  return contenedor;
}


/*
function crearResenia(comentario){
  const contenedor = document.createElement("article");
  contenedor.className = "contenedor-opinion";

  // generar las estrellas como imágenes
  let estrellasHTML = "";
  for(let i = 0; i < comentario.puntuacion; i++) {
    estrellasHTML += `<img src="/img/logo.png" alt="estrella" class="estrella">`;
  }

  contenedor.innerHTML = `
    <div>
      <h4>${comentario.nombre}</h4>
      <div class="estrellas">
        ${estrellasHTML}
      </div>
    </div>
    <p>${comentario.comentario}</p>
  `;

  return contenedor;
}

*/