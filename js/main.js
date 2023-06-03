function validar(formulario) {
    if (formulario.nombre.value.trim().length == 0) {
      alert("Debe ingresar su nombre.");
      return false;
    }
  
    if (formulario.apellido.value.trim().length == 0) {
      alert("Debe ingresar su apellido.");
      return false;
    }
    var exreg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!exreg.test(formulario.mail.value)) {
      alert("Debe ingresar su email.");
      return false;
    }
    if (formulario.cantidad.value.trim().length == 0) {
      alert("Debe ingresar una cantidad de entradas.");
      return false;
    }
    var exreg2 = /^(0|([1-9]\d*))$/;
    if (!exreg2.test(formulario.cantidad.value)) {
      alert("La cantidad de entradas debe ser un número sin comas o puntos.");
      return false;
    }
}
  
    function calcularPrecioTotal() {
        var categoria = document.getElementById("inputState").value;
        var cantidad = parseInt(document.getElementById("inputCity").value);
        var precioBase = 200;
        var descuento = 0;
      
        switch (categoria) {
          case "Estudiante":
            descuento = 0.8;
            break;
          case "Trainee":
            descuento = 0.5;
            break;
          case "Junior":
            descuento = 0.15;
            break;
          default:
            break;
        }
      
        var precioTotal = precioBase * cantidad * (1 - descuento);
      
        document.getElementById("disabledTextInput").setAttribute("placeholder", "Total a pagar: $" + precioTotal.toFixed(2));
      }
