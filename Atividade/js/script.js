// Exercício 01 --------------------------------------------------------------
exercicio1 = () => {
        document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
    for (let i = 1; i <= 10; i++) {
        document.getElementById("resposta").innerHTML += `${i}. `
    }
};
// Exercício 02 --------------------------------------------------------------
exercicio2 = () =>  {
        document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
    for (let i = 0; i <= document.getElementById("num").value; i += 2) {
        document.getElementById("resposta").innerHTML += `${i}. `
    }
};
// Exercício 03 --------------------------------------------------------------
exercicio3 = () => {
        document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
    if (num % num == 0) {
        document.getElementById("resposta").innerHTML = `O número inserido é um número primo!`
    } else {
        document.getElementById("resposta").innerHTML = `O número inserido não é um número primo!`
    }
}