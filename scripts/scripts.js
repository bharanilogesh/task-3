'use strict';

// Set-3

// 1. Write a function removeConsecutiveDuplicates(arr) that takes an array as input and returns a new array where consecutive duplicate elements are removed.
// Example:
//removeConsecutiveDuplicates(["a","a","b","b","c"]);
//Output: ["a","b","c"]

function removeConsecutiveDuplicates(arr) {
  var result = [];
  var prev = null;

  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];

    if (element !== prev) {
      result.push(element);
      prev = element;
    }
  }

  return result;
}

var arr = ["a","a","b","b","c"];
var result = removeConsecutiveDuplicates(arr);
console.log(result); 



// 2. Write a function titleCase(str) that takes a string as input and returns a new string where the first letter of each word is capitalized, and all other letters are in lowercase. Ignore leading, trailing, and multiple spaces between words.
// Example:
// titleCase("javascript is AWESOME");
//Output: "Javascript Is Awesome"

function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  var result = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (word !== "") {
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      result.push(capitalizedWord);
    }
  }

  return result.join(" ");
}

//Output:
var str = "javascript is AWESOME";
var result = titleCase(str);
console.log(result); 



// 3. Write a function countSubstringOccurrences(str, substr) that takes two strings as input and returns the number of occurrences of substr within str.
// Example:
// countSubstringOccurrences("javascript is awesome", "is");
//Output: 1

function countSubstringOccurrences(str, substr) {
  var count = 0;
  var position = 0;

  while (true) {
    var found = str.indexOf(substr, position);
    if (found === -1) {
      break;
    }
    count++;
    position = found + 1;
  }

  return count;
}

// Output:
var str = "javascript is awesome";
var substr = "is";
var count = countSubstringOccurrences(str, substr);
console.log(count); 



// 4. Write a function isPowerOfThree(n) that takes a positive integer n as input and returns true if n is a power of 3, and false otherwise.
// Example:
// isPowerOfThree(12); 
//Output: false

function isPowerOfThree(n) {
  if (n <= 0) {
    return false;
  }

  while (n > 1) {
    if (n % 3 !== 0) {
      return false;
    }
    n = n / 3;
  }

  return true;
}

//Output:

console.log(isPowerOfThree(12)); 


// 5. string containing only the unique characters in the original string, maintaining the order of appearance.
// Example:
// getUniqueCharacters("javascript is cool");
//Output: "javscrit is col"

function getUniqueCharacters(str) {
  var uniqueChars = "";
  var charSet = new Set();

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!charSet.has(char)) {
      uniqueChars += char;
      charSet.add(char);
    }
  }

  return uniqueChars;
}

//Output:
var str = "javascript is cool";
var unique = getUniqueCharacters(str);
console.log(unique); 



// 6. Write a script that creates a dynamic slideshow with fade-in and fade-out effects for images using JavaScript and the DOM.




// 7. Implement a function that calculates and displays the total word count, character count, and average word length of a given paragraph using JavaScript and the DOM.





// 8. Create a script that dynamically generates a table of contents for a web page based on the headings present in the content, using JavaScript and the DOM.




// 9. Implement a function that creates a modal window (popup) with customizable content and controls to close the modal, using JavaScript and the DOM.





// 10. Write JavaScript code that allows users to select and copy text from a specific HTML element with a button click, using the DOM.