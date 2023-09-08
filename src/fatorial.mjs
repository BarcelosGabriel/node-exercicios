import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output })


function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Exemplo de uso:
const numero = await rl.question("add the number: \n")
const fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`);

rl.close()