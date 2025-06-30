const resenias = [
  {
    imagen: "imagen del producto",
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
    ]
  },
]

function cargarResenias(){
  comentarios.forEach(categoria => {
    
    const articulo = document.createElement("section");
    categoriaDiv.className = "contenedorProductos";
    main.appendChild(categoriaDiv);


    categoria.productos.forEach(producto => {

      const carta = crearCarta(producto);

      if(!window.location.href.includes('inicio.html')) {
          categoriaDiv.appendChild(carta);
      } 
      else{
        if(producto.promocion){
            categoriaDiv.appendChild(carta);
        }
      }
    });
  });
}