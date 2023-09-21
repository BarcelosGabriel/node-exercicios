import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output })

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troque os elementos arr[i] e arr[i + 1]
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Peça ao usuário para inserir a lista de números
let enput = await rl.question("Insira o primeiro numero: \n");
const numeros = enput.split(" ").map(Number);

console.log("Lista original:", numeros);

const listaOrdenada = bubbleSort(numeros.slice()); // Criamos uma cópia da lista para manter a original intacta
console.log("Lista ordenada:", listaOrdenada);

rl.close()