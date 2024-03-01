//caled when page loads; sets up event handlers
window.onload = function() {
    var computeButtonC2F = document.getElementById("calculac2f");
    computeButtonC2F.onclick = c2f;

    var computeButtonF2C = document.getElementById("calculac2c");
    computeButtonF2C.onclick = f2c;

    var computeButtonC2K = document.getElementById("calculac2k");
    computeButtonC2K.onclick = c2k;
};

function c2f() {
    var celsius = document.getElementById("celsius").value;

    var answer = document.getElementById("answer");

    var fahr = celsius * 9./5. + 32.;
    
    var estado;

    if (fahr < 41. )
        estado = "hace frío.";
    else if ( fahr > 77. )
        estado = "hace calor.";
    else 
        estado = "la temperatura es normal.";

    answer.innerHTML = "La temperatura en grados Fahrenheit es de " + fahr.toFixed(2) + " grados, " + estado;
}

function f2c() {
    var fahrenheit = document.getElementById("fahrenheit").value;

    var answerf = document.getElementById("answerf");

    var celsius = (fahrenheit - 32.) / 1.8;
    
    var estado;

    if (celsius < 16. )
        estado = "hace frío.";
    else if ( celsius > 40. )
        estado = "hace calor.";
    else 
        estado = "la temperatura es normal.";

    answerf.innerHTML = "La temperatura en grados Celsius es de " + celsius.toFixed(2) + " grados, " + estado;
}

function c2k() {
    var celsius = document.getElementById("celsius2").value;

    var answerk = document.getElementById("answerk");

    var kelvin = parseFloat(celsius) + 273.15;
    
    var estado;

    if (kelvin < 289. )
        estado = "hace frío.";
    else if ( kelvin > 313. )
        estado = "hace calor.";
    else 
        estado = "la temperatura es normal.";

    answerk.innerHTML = "La temperatura en grados Kelvin es de " + kelvin.toFixed(2) + " grados, " + estado;
}

