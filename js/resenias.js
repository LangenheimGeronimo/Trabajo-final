const productosResenias = [
  {
    imagen: "/img/productos/bigMac.png",
    titulo: 'Big Mac',
    resenias: [
      {
        nombre: "Julian Lpoez", 
        puntuacion: 1,
        comentario: 'Muy fea. El pan estaba seco y la carne sin gusto. No la volvería a pedir.'
      },
      {
        nombre: "Lucia Herrera", 
        puntuacion: 3,
        comentario: 'Muy fea. El pan estaba seco y la carne sin gusto. No la volvería a pedir.'
      },
      {
        nombre: "Tomas Beltran", 
        puntuacion: 5,
        comentario: 'La clásica que nunca falla! Siempre que quiero algo rápido y rico, elijo la Big Mac.'
      },
      {
        nombre: "Emanuel San Roman", 
        puntuacion: 2,
        comentario: 'Demasiada salsa para mi gusto, y la lechuga estaba mustia. No fue una buena experiencia.'
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
    ]
  },
  {
    imagen: "/img/productos/kitKat.png",
    titulo: 'McFlurry Kit Kat',
    resenias: [
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
    ]
  },
  
]



function cargarResenias(){
  
  productosResenias.forEach(producto => {
    const section = document.createElement("section");
    const divContenedor = document.createElement("div");
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const divTitulo = document.createElement('div');
    
    image.src = producto.imagen;
    divContenedor.className = "primer-contenedor";
    divTitulo.className = 'divTitulo';
    title.innerHTML = producto.titulo;

    divTitulo.appendChild(title);
    divTitulo.appendChild(image);
    section.appendChild(divTitulo);
    section.appendChild(divContenedor);
    
    // Mientras que el indice del producto sea distinto al ultimo
    if(productosResenias.indexOf(producto) !== productosResenias.length-1) {
      section.appendChild(document.createElement('hr'));
    }

    document.querySelector('main').appendChild(section);

    producto.resenias.forEach(resenia => {
        const reseniaC = crearResenia(resenia); 
        divContenedor.appendChild(reseniaC);
    });
  });
}

cargarResenias();

function crearResenia(resenia){
  const contenedor = document.createElement("article");
  contenedor.className = "contenedor-opinion";
  
  let puntuacion = "";
  puntuacion += `<img src="/img/logos/logo-puntuacion.png">`.repeat(resenia.puntuacion) + `<img src="/img/logos/logo-gris.png">`.repeat(5 - resenia.puntuacion);


  contenedor.innerHTML = `
                <div>
                    <h4>${resenia.nombre}</h4>
                    <div>
                        ${puntuacion}
                    </div>
                </div>

                <p>${resenia.comentario}</p>
            `;
  return contenedor;
}