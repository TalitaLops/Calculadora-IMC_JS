function calculate() {
    var imc;

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm"

    imc = (weight / Math.pow((height / 100), 2)).toFixed(1);
    resultado.textContent = imc;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        resultado.style.color = "#ffc44d";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso adequado";
        resultado.style.color = "#0be881";
    } else if (imc >= 25 && imc <= 29) {
        categoria = "Sobrepeso";
        resultado.style.color = "#ff884d";
    } else {
        categoria = "Obesidade";
        resultado.style.color = "#ff1e10";
    }
    document.getElementById("categoria").textContent = categoria;
}
