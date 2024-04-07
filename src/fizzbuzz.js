// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  addNumbers = Array.from(
    { length: upper - lower + 1 },
    (_, index) => index + lower
  )
  for (let i = lower; i <= upper; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
  return addNumbers
}
console.log(fizzBuzz(1, 54))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
