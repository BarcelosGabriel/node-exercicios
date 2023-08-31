import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output })

function countCharacters(word){
    return word.length;
}

const word = await rl.question("add the word: \n")
const numberOfCharacters = countCharacters(word)
console.log(`your word has ${numberOfCharacters}`)

rl.close()