import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output })

const calculando = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

function calculadora(operacao, a, b) {
    const operando = calculando[operacao];

    if (operando) {
        return operando(a, b);
    } else {
        return "Operação não suportada";
    }
}

let oper = await rl.question('Qual operação deseja efetuar (+) (-) (*) (/) : \n');
let num1 = parseFloat(await rl.question("Insira o primeiro numero: \n"));
let num2 = parseFloat(await rl.question("Insira o segundo numero: \n"));

const result = calculadora(oper, num1, num2);
console.log(`Resultado: ${result}`);

rl.close();

