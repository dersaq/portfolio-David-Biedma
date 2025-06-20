const imagenes = document.querySelectorAll('.ampliable');

imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    if (imagen.requestFullscreen) {
      imagen.requestFullscreen();
    } else if (imagen.webkitRequestFullscreen) {
      imagen.webkitRequestFullscreen();
    } else if (imagen.msRequestFullscreen) {
      imagen.msRequestFullscreen();
    }
  });
});
