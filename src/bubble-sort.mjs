function bubbleSort(lista) {
    // calculando o comprimneot da lista e armazenando na variavel "compr".
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
const minhaLista = [22, 34, 25, 12, 22, -1, 0];
bubbleSort(minhaLista);
console.log("Lista ordenada:", minhaLista);

// Bubble Sort é um algoritmo de ordenação que pode ser aplicado em Arrays e Listas dinâmicas
// Bubble Sort is a sorting algorithm that can be applied to Arrays and Dynamic Lists
