function fibonacci(n) {
  const fibNumbers = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextFib = fibNumbers[i - 1] + fibNumbers[i - 2];
    fibNumbers.push(nextFib);
  }

  return fibNumbers.slice(0, n);
}

const trintaPrimeirosFibonacci = fibonacci(30);
console.log(trintaPrimeirosFibonacci);