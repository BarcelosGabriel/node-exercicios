import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output })

function fibonacci(n) {
  const fibNumbers = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextFib = fibNumbers[i - 1] + fibNumbers[i - 2];
    fibNumbers.push(nextFib);
  }

  return fibNumbers.slice(0, n);
}

const Fib= await rl.question("add the number: \n")
console.log(fibonacci(Fib));

rl.close()