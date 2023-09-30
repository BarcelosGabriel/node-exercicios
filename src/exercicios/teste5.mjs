import fs from 'fs';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Criar um array de 1 a 1000
  let numeros = [];
  for (let i = 1; i <= 1000; i++) {
    numeros.push(i);
  }
  
  // Embaralhar o array
  shuffle(numeros);

function quicksort(array) { //array = []
    if (!array.length) return []
    if (array.length === 1) return array

    const pivot = array[Math.floor(Math.random() * array.length)]
    // const pivot = array[0];

    const left = array.filter(n => n < pivot)
    const equal = array.filter(n => n === pivot)
    const right = array.filter(n => n > pivot)

    return [...quicksort(left), ...equal, ...quicksort(right)]
    // return quicksort(left).concat(equal).concat(quicksort(right))
}

const array = [6, 2, 7, 9, 4, 1, 8, 5, 3]

console.time("test_timer");
const quicksortlist = quicksort(numeros)
console.timeEnd("test_timer");
console.log(quicksortlist)

// Crie um array de arrays para representar os dados no formato CSV
const data = quicksortlist.map(number => [number])

// Crie um arquivo CSV e escreva os dados
const csvData = data.map(row => row.join('')).join('\n')
fs.promises.writeFile('list.csv', csvData)