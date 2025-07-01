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
        comentario: 'No está mal, pero esperaba más. El sabor es bueno, aunque se siente un poco artificial.'
      },
      {
        nombre: "Tomas Beltran", 
        puntuacion: 5,
        comentario: 'La clásica que nunca falla! Siempre que quiero algo rápido y rico, elijo la Big Mac.'
      },
      {
        nombre: "Agustin Gonzalez", 
        puntuacion: 4,
        comentario: 'Muy rica, aunque podría venir un poco más caliente. El sabor sigue siendo genial.'
      },
    ]
  },
  {
    imagen: "/img/productos/kitKat.png",
    titulo: 'McFlurry Kit Kat',
    resenias: [
      {
        nombre: "Agustin Rivas", 
        puntuacion: 5,
        comentario: '¡Una bomba! El helado cremoso con los pedacitos de Kit Kat es adictivo. Mi postre favorito.'
      },
      {
        nombre: "Lionel Messi", 
        puntuacion: 3,
        comentario: 'Está bien, pero esperaba más sabor a chocolate. Los trozos de Kit Kat a veces se sienten muy duros.'
      },
      {
        nombre: "Valentina Ortiz", 
        puntuacion: 2,
        comentario: 'Demasiado dulce para mí. Después de unas cucharadas ya me empalaga.'
      },
      {
        nombre: "Matias Godoy", 
        puntuacion: 4,
        comentario: 'Muy rico, aunque podría tener un poco más de Kit Kat. Aún así, lo volvería a pedir.'
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