// Exercício 01 --------------------------------------------------------------
exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `${i}. `;
  }
};
// Exercício 02 --------------------------------------------------------------
exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 0; i <= document.getElementById("num").value; i += 2) {
    document.getElementById("resposta").innerHTML += `${i}. `;
  }
};
// Exercício 03 --------------------------------------------------------------
exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `O número '${num}' não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; // declarar variavel para primo
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }

    primo
      ? (result.innerText = `O número '${num}' é um número primo!`)
      : (error.innerText = `O número '${num}' não é um número primo!`);
  }
};
// Exercício 04 --------------------------------------------------------------
exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `O número '${num}' não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    for (let i = 0; i <= 10; i++) {
      result.innerText = ` ${num} . 01 = ${num * 1}
        ${num} . 02 = ${num * 2}
        ${num} . 03 = ${num * 3}
        ${num} . 04 = ${num * 4}
        ${num} . 05 = ${num * 5}
        ${num} . 06 = ${num * 6}
        ${num} . 07 = ${num * 7}
        ${num} . 08 = ${num * 8}
        ${num} . 09 = ${num * 9}
        ${num} . 10 = ${num * 10}`;
      error.innerText = "";
    }
  }
};
// Exercício 05 --------------------------------------------------------------
exercicio5 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let contador = 0;

  result.innerText = "";
  if (num <= 0) {
    error.innerText = `O número '${num}' não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    while (num >= contador) {
      if (contador % 2 !== 0) result.innerText += ` ${contador}. `;
      contador++;
      error.innerText = "";
    }
  }
};
// Exercício 06 --------------------------------------------------------------
exercicio6 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let contador = 0;
  let soma = 0;

  result.innerText = "";
  if (num <= 0) {
    error.innerText = `O número '${num}' não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    while (num >= contador) {
      if (contador % 2 == 0) {
        soma += contador;
      }
      contador++;
      result.innerHTML = soma;
    }
  }
};
// Exercício 07 --------------------------------------------------------------
exercicio7 = () => {
  let countdown = 10;
  let result = document.getElementById("resposta");

  result.innerText = "";
  while (countdown > 0) {
    result.innerHTML += ` ${countdown}. `;
    countdown--;
  }
};
// Exercício 08 --------------------------------------------------------------
exercicio8 = () => {
    let palavra = document.getElementById("palavra").value
    let sim = palavra.split("")
    const reverso = []

    for (let i = sim.length; i >= 0; i--) {
        reverso.push(sim[i])
    }
    let texto = reverso.join("")
    if(palavra == texto){
        document.getElementById("resultado").innerText = "Está palavra é um palíndromo!"
    } else {
        document.getElementById("erro").innerText = "Está palavra não é um palíndromo!"
    }
};
// Exercício 09 --------------------------------------------------------------
exercicio9 = () => {
  let result = document.getElementById("resposta");
  let soma = 0;

  for (let contador = 1; contador <= 100; contador++) {
    result.innerHTML += ` ${contador}. `;
    soma += contador;
  }
  result.innerHTML = soma;
};
// Exercício 10 --------------------------------------------------------------
exercicio10 = () => {

}