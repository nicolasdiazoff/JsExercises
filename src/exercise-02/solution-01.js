const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (sides) => {
  let numberSides = parseInt(sides)
  if (numberSides >= 3) {
    let diagonals = (numberSides * (numberSides - 3) / 2) + numberSides
    console.log(`The number of diagonals is ${diagonals}`)
    return diagonals
  } else {
    console.log(`If the polygon has less than three sides it is a line or a point`);
    return
  }

}

readline.question('What is the number of sides of the polygon?', sides => {
  solution(sides)
  readline.close();
});



