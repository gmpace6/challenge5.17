// Sort by Product

// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.
// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:
// Input: 23, 2, 3, 4, 5
// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4
// 2 => 2 * 2 = 4 -> Output-Pos 1
// 3 => 3 * 3 = 9 -> Output-Pos 2
// 4 => 4 * 4 = 16 -> Output-Pos 3
// 5 => 5 * 5 = 25 -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

// convert array contents to objects
// for loop through object/array, multiply (i+1) * [i]
// save product, original index, and original factor to arrays
// sort arrays in object asc by product
// splice/slice/push original factor to new array

let array =  [23, 2, 3, 4, 5]
let newArray = []

function arrayOfObjects(array) {
    for(let i = 0; i < array.length; i++)
    newArray.push((i+1) * array[i])
    return newArray
}
console.log(arrayOfObjects(array))


const productSort = (nums) => {
    return nums.map((num, i) => {
      return {
        ori: num,
        product: num * (i + 1)
    }
    })
    .sort((num1, num2) => (num1.product - num2.product))
    .map(num => num.ori)
  }
  
  console.log(productSort([23, 2, 3, 4, 5]))