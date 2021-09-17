function calculate() {
    var imc;

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm"

    imc = (weight / Math.pow((height / 100), 2)).toFixed(1);
    result.textContent = imc;

    if (imc < 18.5) {
        category = "Abaixo do peso";
        result.style.color = "#ffc44d";
    } else if (imc >= 18.5 && imc < 24.9) {
        category = "Peso adequado";
        result.style.color = "#0be881";
    } else if (imc >= 25 && imc <= 29) {
        category = "Sobrepeso";
        result.style.color = "#ff884d";
    } else {
        category = "Obesidade";
        result.style.color = "#ff1e10";
    }
    document.getElementById("category").textContent = category;
}