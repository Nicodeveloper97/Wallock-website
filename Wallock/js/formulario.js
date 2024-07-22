function confirmacion() {
    var enviado = confirm("Deseas enviar el formulario?");
    if  (enviado == true) {
        return true;
    } else {
        return false;
    }
    
}