var iconos = ["fa-kiss-beam", "fa-laugh-beam", "fa-grin-hearts", "fa-meh-rolling-eyes"];

function mostrarIconoPrincipal(icono) {
  var mainIcon = document.getElementById("main_icon");
  mainIcon.classList = "fas";
  mainIcon.classList.add(icono);
}

function nuevoIcono(){
  nombreicono = document.getElementById("icon_input").value;
  iconos.push(nombreicono);
  imprimirTodosLosIconos();

}

function validarNombre(){
  nombreicono = document.getElementById("icon_input").value;

  if (nombreicono == ""){
    return false;
  }else{
    return true;
  }
}

function validarTodo(){
  var nombre = validarNombre();
  if(nombre){
    nuevoIcono();
  }
}

function imprimirArreglo(propiedad, index){
var lista = document.getElementById("icons_list");
lista.insertAdjacentHTML('beforeend',
  `<li class="icon_container" onclick="mostrarIconoPrincipal('` + propiedad + `')">
    <i class="close_icon fas fa-times" onclick="eliminarIcono(` + index + `)"></i>
    <i class="icon fas ` + propiedad + ` "></i>
    <div class="label">` + propiedad + `</div>
  </li>`
  );
}


function eliminarIcono(index) {
  iconos.splice(index, 1);
  imprimirTodosLosIconos();
}

function imprimirTodosLosIconos(){
  var lista = document.getElementById("icons_list");
  lista.innerHTML = "";
  iconos.forEach(imprimirArreglo);


}

imprimirTodosLosIconos();