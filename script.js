document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll("nav a");
  
    enlaces[0].addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "inicio.html"; //AÑADIR EN EL SEGUNDO COMMIT DEL DÍA JEJE
    });
  
    enlaces[1].addEventListener("click", function (e) {
      e.preventDefault();
      //window.location.href = "productos.html";
    });
  
    enlaces[2].addEventListener("click", function (e) {
      e.preventDefault();
      //window.location.href = "reportes.html";
    });
  });
  