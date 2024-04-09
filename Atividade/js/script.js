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
  let num = document.getElementById("num").value;
  let resposta = document.getElementById("resposta");
  let error = document.getElementById("erro");

  if (num <= 0) {
    error.innerText = `O número '${num}' não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    resposta.innerHTML = "<h2>Resposta da Atividade</h2>";
    for (let i = 0; i <= num; i += 2) {
      resposta.innerHTML += `${i}. `;
    }
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
  let palavra = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  result.innerText = "";
  error.innerText = "";

  let reverso = "";

  if (palavra == "") {
    error.innerText = "Informe uma palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      reverso += palavra.charAt(palavra.length - i);
    }
    palavra.toLowerCase() == reverso.toLocaleLowerCase()
      ? (result.innerText = "Essa palavra é um palíndromo!")
      : (error.innerText = "Essa palavra não é um palíndromo!");
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
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let somar = 0;

  contador = 0;

  if (num <= 0) {
    error.innerText = `O número ${num} não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    while (num >= contador) {
      somar += contador;
      contador++;
      result.innerText = `A soma do número é ${somar}!
      A média da soma é ${somar / num}!`;
      error.innerHTML = "";
    }
  }
};
// Exercício 11 --------------------------------------------------------------
exercicio11 = () => {
  let result = document.getElementById("resposta");

  result.innerText = "";
  for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0) result.innerText += ` ${n}. `;
  }
};
// Exercício 12 --------------------------------------------------------------
exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let somar = 0;

  result.innerText = "";
  if (num <= 0) {
    error.innerText = `O número ${num} não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    for (let n = 0; n < num.length; n++) {
      somar += parseInt(num[n]);
    }
    result.innerHTML += `${somar}`;
    error.innerText = "";
  }
};
// Exercício 13 --------------------------------------------------------------
exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }

  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O número ${num1} ou o número ${num2} não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let numPrimo = menor; numPrimo <= maior; numPrimo++) {
      let primo = true;
      for (let n = 2; n < numPrimo; n++) {
        if (numPrimo % n == 0) primo = false;
      }
      primo && (result.innerText += ` ${numPrimo}. `);
    }
  }
};
// Exercício 14 --------------------------------------------------------------
exercicio14 = () => {
  let larg = document.getElementById("num1").value;
  let comp = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  result.innerText = "";
  if (larg > 0 && comp > 0) {
    let area = larg * comp;
    result.innerHTML = `A área dos dois números inseridos é ${area}`;
    error.innerText = "";
  } else {
    error.innerText = `O número ${larg} ou o número ${comp} não é válido, insira um número positivo!`;
    result.innerText = "";
  }
};
// Exercício 15 --------------------------------------------------------------
exercicio15 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let frase = document.getElementById("palavra").value;
  let sim = frase.split("");
  let vogais = ["a", "e", "i", "o", "u"];
  let consoantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  result.innerText = "";
  error.innerText = "";
  if (frase == "") {
    error.innerText = "Campo vazio, insira uma palavra";
  } else {
    for (let p = 0; p < frase.length; p++) {
      for (let i = 0; i < vogais.length; i++) {
        if (frase[p] == vogais[i]) {
          result.innerText += `vogal: ${frase[p]}| `;
        }
      }
      for (let s = 0; s < consoantes.length; s++) {
        if (frase[p] == consoantes[s]) {
          error.innerText += `consoante: ${frase[p]} |`;
        }
      }
    }
  }
};
// Exercício 16 --------------------------------------------------------------
exercicio16 = () => {
  let raio = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let area = 0;

  if (raio <= 0) {
    error.innerText = `O número ${raio} não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    area = Math.PI * raio * raio;
    result.innerText = `A área do círculo segundo o raio informado é de aproximadamente ${area.toFixed(
      2
    )}`;
    error.innerText = "";
  }
};
// Exercício 17 --------------------------------------------------------------
exercicio17 = () => {
  let base = document.getElementById("num1").value;
  let alt = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  result.innerText = "";
  if (base > 0 && alt > 0) {
    let area = (base * alt) / 2;
    result.innerHTML = `A área dos dois números inseridos é ${area}`;
    error.innerText = "";
  } else {
    error.innerText = `O número ${base} ou o número ${alt} não é válido, insira um número positivo!`;
    result.innerText = "";
  }
};
// Exercício 18 --------------------------------------------------------------
exercicio18 = () => {
  let baseMaior = parseFloat(document.getElementById("num1").value); // converte a string para número
  let baseMenor = parseFloat(document.getElementById("num2").value);
  let altura = parseFloat(document.getElementById("num3").value);
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  result.innerText = "";
  if (baseMaior > 0 && baseMenor > 0 && altura > 0) {
    let area = ((baseMaior + baseMenor) * altura) / 2;
    result.innerText = `A área dos dois números inseridos é ${area}`;
    error.innerText = "";
  } else {
    error.innerText = `O número ${baseMaior}, ${baseMenor} ou ${altura} não é válido, insira um número positivo!`;
    result.innerText = "";
  }
};
// Exercício 19 --------------------------------------------------------------
exercicio19 = () => {
  let dataInfo = document.getElementById("data").value;
  let dataAtual = new Date();
  let dataNasci = new Date(dataInfo);
  let result = document.getElementById("resultado");

  var idade = dataAtual.getFullYear() - dataNasci.getFullYear();
  var idadeMes = dataAtual.getMonth() - dataNasci.getMonth();

  if (
    idadeMes < 0 || // verifica se o mês aniversário é menor que o atual
    dataAtual.getDate() < dataNasci.getDate()
  ) {
    // verifica a data/dia de aniversario é menor que o atual
    idade--;
  } // se uma delas for verdadeira tira um ano da idade

  result.innerText = `Você possui ${idade} anos!`;
};
// Exercício 20 --------------------------------------------------------------
exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let corte = frase.split(" ");

  const reverso = [];

  for (let i = corte.length; i >= 0; i--) {
    reverso.push(corte[i]);
  }
  let texto = reverso.join(" ");
  if (frase == "") {
    error.innerText = "O campo está vazio, insira uma frase";
  } else {
    error.innerText = "";
    result.innerText = `${texto}`;
  }
  // let result = document.getElementById("resultado");
  // let error = document.getElementById("erro");
  // let string = document.getElementById("frase").value;

  // let reverso = "";

  // if (string == "") {
  //   error.innerText = `O campo está vazio, insira uma frase!`;
  // }
  // for (let i = 1; i <= string.length; i++) {
  //   reverso += string.charAt(string.length - i);
  // }
  // result.innerText = `${reverso}`;

  // console.log(reverso)
};
// Exercício 21 --------------------------------------------------------------
exercicio21 = () => {
  let texto = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let frase = texto.split(" ");

  error.innerText = "";
  result.innerText = "";
  if (texto == "") {
    error.innerText = "texto";
  } else {
    let novoTexto = frase.join("");
    result.innerText = `${novoTexto}`;
  }
};
// Exercício 22--------------------------------------------------------------
var soma22 = 0;
exercicio22 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let num = document.getElementById("num").value;
  let contador = 0;

  if (num <= 0) {
    error.innerText = `O número '${num}' não é válido, insira um número positivo!`;
    result.innerText = "";
  } else if (soma22 <= 100) {
    soma22 += parseInt(num);

    result.innerText = soma22;
    error.innerHTML = "";
    contador++;
  }
};
// Exercício 23 --------------------------------------------------------------
exercicio23 = () => {
  let frase = document.getElementById("frase").value.toLowerCase();
  let palavra = document.getElementById("palavra").value.toLowerCase();
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let palavrasFrase = frase.split(" ");
  let contador = 0;

  for (let i = 0; i < palavrasFrase.length; i++) {
    if (palavrasFrase[i] === palavra) {
      contador++;
    } else {
      error.innerText = "Não existe palavra";
      result.innerText = "";
    }
  }
  result.innerText = `A palavra ${palavra} apareceu ${contador} vezes na frase!`;
  error.innerText = "";
};
// Exercício 24 --------------------------------------------------------------
exercicio24 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let frase = document.getElementById("frase").value;

  let palavra = frase.split(" ");
  let titleCase = palavra.map((palavra) => {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
  });
  let fraseNova = titleCase.join(" ");
  if (frase == "") {
    error.innerText = "Insira uma frase!";
    result.innerText = "";
  } else {
    result.innerHTML = fraseNova;
    error.innerText = "";
  }
};

// Exercício 25 --------------------------------------------------------------
exercicio25 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let numeros = [num1, num2, num3];
  result.innerHTML = "";
  error.innerHTML = "";

  if (num1 > 0 && num2 > 0 && num3 > 0) {
    numeros = numeros.sort((a, b) => a - b);
    for (let i = 0; i < 3; i++) {
      result.innerHTML += ` ${numeros[i]}.`;
    }
  } else {
    error.innerHTML = "Informe um número válido!";
  }
};
