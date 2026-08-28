// ======================================================
// FUNCIÓN PARA VERIFICAR LA COBERTURA DE DELIVERY
// ======================================================

function verificarZona() {

  const distrito = document.getElementById("distrito").value;

  const resultado = document.getElementById("resultado-cobertura");

  if (!distrito) {
    return;
  }

  resultado.classList.remove("d-none");

  if (distrito === "otro") {

    resultado.className =
      "resultado-caja resultado-error mt-3";

    resultado.innerHTML =
      "❌ <strong>Aún no llegamos a esta zona directamente.</strong> " +
      "Pero puedes pedir para recojo en tienda.";

  } else {

    resultado.className =
      "resultado-caja resultado-exito mt-3";

    resultado.innerHTML =
      "✅ <strong>¡Llegamos a tu zona!</strong> " +
      "Tiempo estimado de entrega: 25 a 35 minutos. " +
      "(Delivery S/ 5.00 o Gratis por compras mayores a S/ 50).";
  }
}


// ======================================================
// FUNCIÓN PARA CALCULAR LOS POLLO PUNTOS
// ======================================================

function calcularPuntos() {

  const monto = document.getElementById("monto").value;

  const textoPuntos =
    document.getElementById("texto-puntos");

  const premio =
    document.getElementById("premio");

  // 1 Sol = 1 Punto

  const puntos = Math.floor(monto) || 0;

  textoPuntos.innerText = puntos;

  if (puntos < 40) {

    premio.innerText =
      "¡Te faltan " +
      (40 - puntos) +
      " puntos para Papas Gratis!";

  } else if (puntos < 80) {

    premio.innerText =
      "¡Ganarías 1 Porción de Papas Gratis! 🍟";

  } else {

    premio.innerText =
      "¡Ganarías 1/4 de Pollo a la Brasa Gratis! 🍗";
  }
}


// ======================================================
// PREGUNTAS FRECUENTES - ACORDEÓN
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

  const preguntas =
    document.querySelectorAll(".faq-item");


  preguntas.forEach((pregunta) => {

    const boton =
      pregunta.querySelector(".faq-question");

    const respuesta =
      pregunta.querySelector(".faq-answer");


    boton.addEventListener("click", () => {

      const estaActivo =
        pregunta.classList.contains("activo");


      // ----------------------------------------------
      // Cerramos todas las preguntas
      // ----------------------------------------------

      preguntas.forEach((otraPregunta) => {

        otraPregunta.classList.remove("activo");

        const otraRespuesta =
          otraPregunta.querySelector(".faq-answer");

        otraRespuesta.style.maxHeight = null;


        const otroBoton =
          otraPregunta.querySelector(".faq-question");

        otroBoton.setAttribute(
          "aria-expanded",
          "false"
        );

      });


      // ----------------------------------------------
      // Abrimos la pregunta seleccionada
      // ----------------------------------------------

      if (!estaActivo) {

        pregunta.classList.add("activo");

        respuesta.style.maxHeight =
          respuesta.scrollHeight + "px";

        boton.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    });

  });

});