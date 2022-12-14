/*
  Write a function called stringifyNumbers which takes in an object and 
  finds all of the values which are numbers and converts them to strings. 
  Recursion would be a great way to solve this.

*/

// const stringifyNumbers = (objInput) => {
//   // copy object input to new variable
//   const result = Object.assign({}, objInput)

//   const helperFunc = (helperInput) => {
//     for (const key in helperInput) {
//       // loop all keys in object input
//       let value = helperInput[key]
//       // check if object prop value is !object
//       if (value.constructor.name !== 'Object') {
//         // check if obejct prop value is number
//         if (typeof value === 'number') {
//           helperInput[key] = value.toString()
//         }
//       } else {
//         helperFunc(value)
//       }
//     }

//     return helperInput
//   }

//   return helperFunc(result)
// }

//*** COURSE SOLUTION ***//
const stringifyNumbers = (obj) => {
  const newObj = {}

  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

const input1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
}

console.log(stringifyNumbers(input1))
