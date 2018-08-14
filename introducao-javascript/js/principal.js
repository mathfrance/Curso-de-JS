var titulo = document.querySelector(".titulo");
        titulo.textContent = "Sumida Nutrição"
        
var pacientes = document.querySelectorAll (".paciente")

for (let index = 0; index < pacientes.length; index++) {
    paciente = pacientes[index]

    var peso = paciente.querySelector(".info-peso").textContent
    var altura = paciente.querySelector(".info-altura").textContent
    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        peso = "Peso inválido!";
        pesoEhValido = false;  
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!");
        altura = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
    
        var imc = peso / (altura * altura);
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);    
    } else {
        paciente.querySelector(".info-imc").textContent = "Altura e/ou peso inválidos!"
    }
    
}