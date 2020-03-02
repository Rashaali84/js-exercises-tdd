// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.
//I will use recursion to call the function itself for better performance

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(inputNum) {
    if (inputNum < 0)
        return -1;

    // If the number is 0, its factorial is 1.
    else if (inputNum == 0)
        return 1;

    // Otherwise, call the recursive procedure again
    else {

        //recursion
        return (inputNum * factorial(inputNum - 1));
    }
}

module.exports = factorial;
