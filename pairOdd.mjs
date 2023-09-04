import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output })

function checkoddeven(number) {
    if (number % 2 == 0) {
        return "pair"
    } else {
        return "odd"
    }
}
const number = parseFloat(await rl.question("enter the number: \n"))
const result = checkoddeven(number)
console.log(`the number ${number} is ${result}.`)

rl.close()