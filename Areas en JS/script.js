// Función para calcular el área de un cuadrado
document.getElementById("calcularCuadrado").addEventListener("click", function() {
    var lado = parseFloat(document.getElementById("baseCuadrado").value);
    var area = lado * lado;
    document.getElementById("resultadoCuadrado").innerText = "El área del cuadrado es: " + area;
});

// Función para calcular el área de un triángulo
document.getElementById("calcularTriangulo").addEventListener("click", function() {
    var base = parseFloat(document.getElementById("baseTriangulo").value);
    var altura = parseFloat(document.getElementById("alturaTriangulo").value);
    var area = (base * altura) / 2;
    document.getElementById("resultadoTriangulo").innerText = "El área del triángulo es: " + area;
});

// Función para calcular el área de un círculo
document.getElementById("calcularCirculo").addEventListener("click", function() {
    var radio = parseFloat(document.getElementById("radioCirculo").value);
    var area = Math.PI * Math.pow(radio, 2);
    document.getElementById("resultadoCirculo").innerText = "El área del círculo es: " + area.toFixed(2);
});
