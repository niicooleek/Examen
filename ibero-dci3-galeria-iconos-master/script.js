var iconos = ["fa-kiss-beam", "fa-laugh-beam", "fa-grin-hearts", "fa-meh-rolling-eyes"];

function mostrarIconoPrincipal(icono) {
  var mainIcon = document.getElementById("main_icon");
  mainIcon.classList = "fas";
  mainIcon.classList.add(icono);
}

function eliminarIcono() {
  event.stopPropagation();
  iconos.splice(index, 1);
  imprimirToodsLosIconos();
}
