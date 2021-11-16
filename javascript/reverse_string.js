// without using a built-in reverse method, reverse a given string. 

function reverseString(str) {
  // type your code here
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: 'eisseJ'");
  console.log("=>", reverseString("Jessie"))

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
  // create an empty string that will hold the new string
  // write a for loop to iterate over the string, and add the characters to the new string in reverse order.
  // while the length of the string is greater than or equal to zero, increment over the string in reverse order an add the last character to the new string
// And a written explanation of your solution
  // I write a function that takes in the original string. I create a new string, which is empty, to store the reversed string. I then use a for loop to iterate over the array, starting at the end, until there are no more letters. The letters are added to the new string array in reverse order. I then return the new string, which is a reversed version of the original string passed into the function.