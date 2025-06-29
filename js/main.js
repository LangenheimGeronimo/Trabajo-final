const productos = [
  {
    titulo: "Hamburguesas",
    productos: [
      {img: "/img/hamburguesa.png", nombre: "triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar", promocion: true},
      {img: "/img/hamburguesa.png", nombre: "triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar", promocion: false},
      {img: "/img/hamburguesa.png", nombre: "triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar", promocion: false},
      {img: "/img/hamburguesa.png", nombre: "triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar", promocion: false},
    ],
  },
  {
    titulo: "Acompañamientos",
    productos: [
      {img: "/img/hamburguesa.png", nombre: "Triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar"},
    ]
  },
  {
    titulo: "Bebidas",
    productos: [
      {img: "/img/bebida.png", nombre: "Bebida", precio: 2300, descripcion: "La bebida mas rica para gero y ema de parte de ciro <3", promocion: true},
    ]
  },
  {
    titulo: "Postres",
    productos: [
      {img: "/img/postre.webp", nombre: "McFlurry", precio: 3000, descripcion: "Postre de oreo", promocion: true},
    ]
  },
  {
    titulo: "Desayunos",
    productos: [
      {img: "/img/hamburguesa.png", nombre: "triple con queso", precio: 5500, descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar"},
    ]
  },
]

let button = document.querySelector('.btn-menu');

button.addEventListener('click', () => {
    let content = document.querySelector('.dropdown-content');
    content.classList.toggle('content');
})
