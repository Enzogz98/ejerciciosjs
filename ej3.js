function ej3() {
    var gradosCelsius = parseFloat(document.getElementById("gradosCelsius").value);

    var gradosFahrenheit = (gradosCelsius * 9/5) + 32;

    document.getElementById("resultado3").innerHTML = "Grados Celsius: " + gradosCelsius + "<br>Grados Fahrenheit: " + gradosFahrenheit;
}