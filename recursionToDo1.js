//Write a recursive function that given a number returns the sum of integers from 1 to that number.

function sigmaFromOne(num){
    if (num === 0){   
    return 0;
    }
    else{
        return sigmaFromOne(num-1) + num;
    }
}
console.log(sigmaFromOne(3));

//factorial

function factorial(num){
    if (num < 0){
        return 0;
    }
    if (num < 1) {
        return 1;
    }
    return factorial(num-1) * num;
}

console.log(factorial(0));