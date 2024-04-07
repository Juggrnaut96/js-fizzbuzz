// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  const results = []
  for (let i = lower; i <= upper; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('FizzBuzz')
    } else if (i % 3 === 0) {
      results.push('Fizz')
    } else if (i % 5 === 0) {
      results.push('Buzz')
    } else {
      results.push(i)
    }
  }
  return results
}

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
