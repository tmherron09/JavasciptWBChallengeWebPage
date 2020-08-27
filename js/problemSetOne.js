function reverseString(input) {
    let reversedString = "";
    for(let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    return reversedString;
}

function callReverse() {
    let input = document.getElementById("reverseInput").value;
    document.getElementById("reverseDisplay").value = reverseString(input);
}

function clearReverse() {
    document.getElementById("reverseDisplay").value = "";
    document.getElementById("reverseDisplay").placeholder = "Click to view output";
}

let inputReverse = document.getElementById("reverseInput");
inputReverse.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("reverseBtn").click();
  }
});


function capitalizeWords(input) {
    let result = input[0].toUpperCase();
    for(let i = 1; i < input.length; i++) {
        if(input[i] === " ") {
            result += input[i];
            i++;
            result += input[i].toUpperCase();
        }
        else {
            result += input[i];
        }
    }
    return result;
}

function callCapitalizeWords() {
    let input = document.getElementById("capitalizeWorldsInput").value;
    document.getElementById("capitalizeWorldsDisplay").value = capitalizeWords(input);
}

function clearCapitalize() {
    document.getElementById("capitalizeWorldsDisplay").value = "";
    document.getElementById("capitalizeWorldsDisplay").placeholder = "Click to view output";
}

let inputCapitalize = document.getElementById("capitalizeWorldsInput");
inputCapitalize.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("capitalizeBtn").click();
  }
});


function compressString(input) {
    let result = "";

    let currentLetter = input[0];
    let letterCount = 1;

    for(let i = 1; i < input.length - 1; i++)
    {
        if(input[i] === currentLetter)
        {
            letterCount += 1;
        }
        else {
            result += letterCount + currentLetter;
            letterCount = 1;
            currentLetter = input[i];
        }
        if(i == input.length - 2)
        {
            if(input[i + 1] === currentLetter) {
                letterCount += 1;
                result += letterCount + currentLetter;
            }
            else {
                result += letterCount + currentLetter;
                result += "1" + input[i+1];
            }
        }
    }

    return result;
}

function callCompressString() {
    let input = document.getElementById("compressInput").value;
    document.getElementById("compressDisplay").value = compressString(input);
}

function clearCompressString() {
    document.getElementById("compressDisplay").value = "";
    document.getElementById("compressDisplay").placeholder = "Click to view output";
}

let inputCompress = document.getElementById("compressInput");
inputCompress.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("compressBtn").click();
  }
});

function palindrome(input) {
    let isPalidrome = true;
    let normalizedInput = "";

    // Normailize Input for sentence checking
    normalizedInput = input.toLowerCase();
    normalizedInput = normalizedInput.replace(/\W*[0-9]*/g, "");

    let j = normalizedInput.length - 1;
    for(let i = 0; i < normalizedInput.length; i++) {

        if(i === j)
        {
            break;
        }
        if( normalizedInput[i] !== normalizedInput[j] ) {
            isPalidrome = false;
            break;
        }
        j -= 1;
    }

    if(isPalidrome) {
        return "It is a Palindrome";
    }
    else {

        return "It is NOT a Palindrome";
    }
}

function callPalindrome() {
    let input = document.getElementById("palindromeInput").value;
    document.getElementById("palindromeDisplay").value = palindrome(input);
}

function clearPalindrome() {
    document.getElementById("palindromeDisplay").value = "";
    document.getElementById("palindromeDisplay").placeholder = "Click to view output";
}

let inputPalindrome = document.getElementById("palindromeInput");
inputPalindrome.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("palindromeBtn").click();
  }
});

