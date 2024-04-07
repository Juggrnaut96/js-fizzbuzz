// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  const addNumbers = Array.from(
    { length: upper - lower + 1 },
    (_, index) => index + lower
  )
  return addNumbers
}
console.log(fizzBuzz(1, 100))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
