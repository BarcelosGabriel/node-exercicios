import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output })

function Palindromo(texto) {
    // Verifique se o texto é igual ao seu inverso
    return texto === texto.split('').reverse().join('');
}

// Exemplos de uso
const texto = await rl.question("add the text: \n")
console.log(Palindromo(texto));
rl.close()

// Um palíndromo é uma palavra, frase ou qualquer outra sequência de unidades que tenha a
// propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita.

