document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll("nav a");
  
    enlaces[0].addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "index.html";
    });
  
    enlaces[1].addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "productos.html";
    });
  
    enlaces[2].addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "reportes.html";
    });
  });
  