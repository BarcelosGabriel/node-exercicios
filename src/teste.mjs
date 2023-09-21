import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output })

function bubbleSort(lista) {
    // calculando o comprimento da lista e armazenando na variavel "compr".
    const compr = lista.length;
    //loop externo que percorre a lista
    for (let i = 0; i < compr; i++) {
        // Flag para otimização: se nenhum swap ocorrer durante um passe, a lista está ordenada
        let swapped = false;
        //loop interno que percorre os elementos da lista
        for (let j = 0; j < compr - i - 1; j++) {
            // Compara o elemento atual com o próximo elemento
            if (lista[j] > lista[j + 1]) {
                // Realiza a troca se o elemento atual for maior que o próximo
                [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
                swapped = true;
            }
        }
        // Se não houve trocas neste passe, a lista já está ordenada
        if (!swapped) {
            break;
        }
    }
}
let n1 = parseFloat(await rl.question("Insira o primeiro numero: \n"));
let n2 = parseFloat(await rl.question("Insira o segundo numero: \n"));
let n3 = parseFloat(await rl.question("Insira o segundo numero: \n"));
let n4 = parseFloat(await rl.question("Insira o segundo numero: \n"));
let n5 = parseFloat(await rl.question("Insira o segundo numero: \n"));
let n6 = parseFloat(await rl.question("Insira o segundo numero: \n"));

const minhaLista = [n1,n2,n3,n4,n5,n6];
bubbleSort(minhaLista);
console.log("Lista ordenada:", minhaLista);

rl.close()