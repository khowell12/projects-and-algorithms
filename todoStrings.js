// Remove blanks - "a bc d e" ---> "abcde"
function removeBlanks(str){
    var arr = str.split(" ");
    var newStr = "";
    for (var i = 0; i < arr.length; i++){
        newStr += arr[i];
    }
    console.log(newStr);
}
//removeBlanks("a v de remove these spaces please");

//Get Digits - given a string, return only the integers in the string as a number. "0s1a3y5w7h9a2t4?6!8?0" --> 1357924680.
function getDigits(str){
    var arr = str.split("");
    var numStr = "";
    var nums = "0123456789";
    for (var i = 0; i < arr.length; i++){
        if (nums.includes(arr[i])){
            numStr += arr[i]
        }
    }
    console.log(numStr);
}
//getDigits("a1dk3kdo");

// acronyms - given a string, return a new string of the first letter from each word in the original string.
function acronyms(str){
    var charArr = str.split("");
    var acStr = charArr[0];
    for(var i = 0; i < charArr.length; i++){
        if(charArr[i] == " "){
            acStr += charArr[i+1];
        }
    }
    console.log(acStr.toUpperCase());
}
//acronyms("this is a test");

// count non spaces
function nonSpaces(str){
    var arr = str.split("");
    var spaceCount = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == " "){
            spaceCount += 1;
        }
    }
    var total = arr.length - spaceCount;
    console.log(total);
}
//nonSpaces("012 345");

//remove strings shorter than
function removeShortStrings(strArr, length){
    for (var i = 0; i < strArr.length; i++){
        if(strArr[i].length < length){
            strArr.splice(i, 1);
        }
    }
    console.log(strArr);
}
removeShortStrings(["1", "12", "123", "12", "", "1234"], 2);
