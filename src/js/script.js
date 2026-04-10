// DECLARAÇÃO E VARIAVEIS
// VAR, LET e CONST

var nome = "Neo";
console.log(nome);
var nome = "Dream";
console.log(nome);

if (true) {
  let avatar = "Fiapinho";
  console.log(avatar);
}

let exemplo1 = "Ola dev-let";
console.log(exemplo1);

const exemplo2 = "Ola dev-const";
console.log(exemplo2);

let exemplo3 = 20;
console.log(typeof exemplo3);

let exemplo4 = true;
console.log(typeof exemplo4);

let exemplo5 = { nome: "fiap" };
console.log(exemplo5);

let exemplo6 = ["PHP", "Java", "Html"];
console.log(exemplo6);

//valor undefined
let exemplo7;
console.log(exemplo7);

//valor null
let exemplo8 = null;
console.log(exemplo8);

//Operadores Aritiméticos
const valor1 = 10;
const valor2 = 20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 / valor2);
console.log(valor1 * valor2);

//Operadores Lógicos
const valor3 = 40;
const valor4 = 20;

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);
console.log(valor3 == valor4 || valor4 > 10);

//Operadores de comapração
const valor5 = 40;
const valor6 = "40";
console.log(valor5 == valor6); //Apenas compara
console.log(valor5 === valor6); //compara e verifica o tipo

/*Utilizando as variáveis p (preço do produto) e  v(valor do desconto), crie uma nova variável 
chamada precoFinal que subtraia o desconto do preço e exiba o resultado.*/

const p = 1000;
const v = 0.3;
const precoFinal = p - v * p;
console.log("O desconto é de:", precoFinal, "Reais");

//Estrutura Condicional
if (true) {
  console.log("Verdadeiro");
}

let nome1 = "fiap";
if (nome1 == "fiap") {
  console.log("Nome Correto");
} else {
  console.log("Nome Errado");
}

//if, if else, else encadeado/aninhado
let idade = 13;
if (idade <= 13) {
  console.log("É uma criança");
} else if (idade > 13) {
  console.log("É uma adoslecente");
} else if (idade > 65) {
  console.log("É um Idoso");
} else {
  console.log("É um Adulto");
}

//switch case
let times = "Corinthians";
switch (times) {
  case "Corinthians":
    console.log("É um time de Tradição");
    break;
  case "Palmeiras":
    console.log("É um time sem Mundial");
    break;
  case "São Paulo":
    console.log("É um Time sem de Tradição");
    break;
  default:
    console.log("Nenhuma das opções(Santos)");
}

//Condicional ternaria

let numero =100;
let resultado  = numero == 100?"Certo":"Errado";
console.log(resultado)

let usuario = "fiap";
let usuarioLogado = usuario=="fiap"? "logado com sucesso":"Usuario Invalido"
console.log(usuarioLogado)

//