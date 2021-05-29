let a = parseInt(prompt("Digite aqui um número para ser a sua base"));
let b = parseInt(prompt("Digite aqui outro número para ser o seu expoente"));

function potencia(a, b){
    return Math.pow(a, b);
}

console.log(potencia(a, b));
alert("Seu resultado estará no console (ctrl + shift + J)");