function rotateArray(arr, k) {
  let rotate = k % arr.length;

  let newArray = [];

  newArray.push(...arr.splice(arr.length - rotate));
  newArray.push(...arr.splice(0, arr.length));

  return newArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 41));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 5));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * Initialize an empty array.
 * use newArray.push(array.splice(arr.length - k)))
 * use newArray.push(array.splice(0, arr.length - k))
 * newArray.reverse()
 * MAKE SURE TO RETURN
 */
