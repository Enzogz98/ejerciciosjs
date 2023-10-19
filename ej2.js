function ej2() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    var nombreCompleto = nombre + " " + apellido;

    document.getElementById("resultado2").innerHTML = "Nombre completo: " + nombreCompleto;
}