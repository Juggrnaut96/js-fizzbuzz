// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
  const numberArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54
  ]
  const fizz = numberArr.filter((number) => {
    return 'Fizz' % 3 === 0
  })
  console.log(fizz)
}
//   return 'Fizz' % 3 === 0
//   console.log(fizz)
// }
console.log(fizzBuzz(8, 36))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
