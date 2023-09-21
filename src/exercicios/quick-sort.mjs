function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[0]; // Escolhe um pivô (geralmente o primeiro elemento)
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elementos menores que o pivô vão para a esquerda
        } else {
            right.push(arr[i]); // Elementos maiores ou iguais ao pivô vão para a direita
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursivamente ordena a esquerda e a direita e concatena com o pivô
}

// Exemplo de uso:
const array = [6, 6, 3, 9, 4, 1, 2, 7]; 
const sortedArray = quickSort(array);
console.log(sortedArray);

// O Quicksort é o algoritmo mais eficiente na ordenação por comparação.
// Quicksort is the most efficient algorithm for comparison sorting.