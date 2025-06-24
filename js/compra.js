document.addEventListener("DOMContentLoaded", () => {
  const contenedores = document.querySelectorAll(".input-cantidad");

  contenedores.forEach((contenedor) => {
    const input = contenedor.querySelector(".campo-cantidad");
    const btnSumar = contenedor.querySelector(".btn-sumar");
    const btnRestar = contenedor.querySelector(".btn-restar");

    btnSumar.addEventListener("click", () => {
      let valor = parseInt(input.value);
      const max = parseInt(input.max);

      if (valor < max) {
        input.value = valor + 1;
      }
    });

    btnRestar.addEventListener("click", () => {
      let valor = parseInt(input.value);
      const min = parseInt(input.min);

      if (valor > min) {
        input.value = valor - 1;
      }
    });
  });
});
