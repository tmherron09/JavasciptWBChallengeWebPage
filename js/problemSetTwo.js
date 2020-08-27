function happyNumbers(input) {

    let currentNumber = input.toString();

    let numbers = [];
    let isHappy = false;
    while (true) {
        let sum = 0
        for (let i = 0; i < currentNumber.length; i++) {
            sum += Math.pow(Number(currentNumber[i]), 2);
        }
        if (sum == 1) {
            isHappy = true;
            return true;
        }
        if (numbers.includes(sum)) {
            isChecking = false;
            break;
        }
        numbers.push(sum);
        currentNumber = sum.toString();
    }
    return false;
}

function onlyHappyNumbers(input) {

    let currentNumber = input.toString();

    let numbers = [];
    let isHappy = false;
    while (true) {
        let sum = 0
        for (let i = 0; i < currentNumber.length; i++) {
            sum += Math.pow(Number(currentNumber[i]), 2);
        }
        if (sum == 1) {
            isHappy = true;
            return input;
        }
        if (numbers.includes(sum)) {
            return null;
        }
        numbers.push(sum);
        currentNumber = sum.toString();
    }
}

function happyNumbersRange(lowerBound, upperBound) {
    let happyNumbers = "";
    for (let i = lowerBound; i <= upperBound; i++) {
        let x = onlyHappyNumbers(i);
        if(x !== null)
        {
            happyNumbers += i + ", ";
        }
    }
    return happyNumbers;
}

function callhappyNumbersRange() {
    let lower = document.getElementById("happyStartInput").value;
    let upper = document.getElementById("happyEndInput").value
    document.getElementById("happyNumbersModal").innerHTML = happyNumbersRange(lower, upper);
    $("#happyModal").modal()
}

function clearhappyNumbersRange() {
    document.getElementById("happyStartInput").value = "";
    document.getElementById("happyEndInput").value = "";
    document.getElementById("happyNumbersModal").innerHTML = "";
}

let happyStartInput = document.getElementById("happyStartInput");
happyStartInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("happyBtn").click();
  }
});

let happyEndInput = document.getElementById("happyEndInput");
happyEndInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("happyBtn").click();
  }
});



function createRangeArray(lower, upper) {
    let range = [];
    for (let i = lower; i <= upper; i++) {
        range.push(i);
    }
    return range;
}

// for numbers 1-100 only
// Has remenants of console only code.
function primeNumbers(upperLimit) {

    if(upperLimit < 2)
    {
        return "Invalid Input";
    }
    let prime = [];
    let notPrime = [];
    let primeDisplay = "";
    notPrime.push(1);
    // prime.push(2);

    for(let i = 2; i <= upperLimit; i++) {

        if(notPrime.includes(i))
        {
            continue;
        }

        //prime.push(i);
        primeDisplay += i + ", ";
        let sum = i;
        while( sum <= 100) {
            sum += i;
            //notPrime.push(sum);
        }
    }

    //prime.forEach(primeConsoleDisplay);
    return primeDisplay;
}

function primeConsoleDisplay(item) {
    console.log(item + " is Prime.");
}

function callPrime() {
    let input = document.getElementById("primeInput").value;
    document.getElementById("primeNumbersModal").innerHTML = primeNumbers(input);
    $("#primeModal").modal()
}

function clearPalindrome() {
    document.getElementById("primeInput").value = "Upper Limit Prime Numbers";
    document.getElementById("primeNumbersModal").innerHTML = "";
}

let inputPrime = document.getElementById("primeInput");
inputPrime.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("primeBtn").click();
  }
});







function fibonacci() {

    let xOne = 1;
    let xTwo = 1;
    let fibonacci = [];
    fibonacci.push(xOne);
    fibonacci.push(xTwo);


    for(let i = 2; i <= 100; i++) {
        xOne = fibonacci[i-2];
        xTwo = fibonacci[i-1];
        fibonacci.push(xOne + xTwo);
    }
    consoleDisplay(fibonacci);
}

function fibonacciWithInput(input, terms) {
    let xOne = parseInt(input);
    let xTwo = xOne;
    let fib = "";
    fib += xOne + ", ";
    fib += xTwo + ", ";
    let fibonacci = [];
    fibonacci.push(xOne);
    fibonacci.push(xTwo);


    for(let i = 2; i <= terms; i++) {
        xOne = fibonacci[i-2];
        xTwo = fibonacci[i-1];
        fibonacci.push(xOne + xTwo);
        fib += (xOne + xTwo) + ", ";
    }
    //consoleDisplay(fibonacci);
    return fib;
}


function consoleDisplay(arr) {
    let fib = "";
    for(let i = 0; i < arr.length; i++) {
        fib += arr[i] + ", ";
    }
    console.log(fib);
}

function callFib() {
    let start = document.getElementById("fibInput").value;
    let terms = document.getElementById("termInput").value
    document.getElementById("fibNumbersModal").innerHTML = fibonacciWithInput(start, terms);
    $("#fibModal").modal()
}

function clearFib() {
    document.getElementById("fibInput").value = "";
    document.getElementById("termInput").value = "";
    document.getElementById("fibNumbersModal").innerHTML = "";
}

let fibInput = document.getElementById("fibInput");
fibInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("fibBtn").click();
  }
});

let termInput = document.getElementById("termInput");
termInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("fibBtn").click();
  }
});
