function ej1() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;

    document.getElementById("resultado1").innerHTML = "Suma: " + suma + "<br>Resta: " + resta + "<br>Multiplicación: " + multiplicacion + "<br>División: " + division;
}