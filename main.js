const prompt = require('prompt-sync')

const target = 10 + Math.round(Math.random() * 90)

let guesses = 0

while (true) {
  const guess = Number(prompt('Guess a number between 1 and 90: '))
  //convert guess from string to number
  if (guess > target) {
    console.log('Too high')
  } else if (guess < target) {
    console.log('Too low')
  } else {
    console.log('Correct')
  }
  break
}
