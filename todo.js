//Push Front

function pushFront(arr, value){
//add value to end of array
//shift each item in array by one
//set arr[0] = value
    arr[arr.length] = value;
    for(i = arr.length-1; i > 0; i--){
        temp = arr[i-1];
        arr[i] = temp; 
    }
    arr[0] = value;
    console.log(arr);
}
//pushFront([1,2,3,4,5,6,7], 0);

//Pop Front = remove and return value at beginning of array
function popFront(arr){
    val = arr[0];
    //shift everything left, pop last value
    for(i=0;i<arr.length;i++){
        temp = arr[i+1];
        arr[i] = temp;
    }
    arr.pop();
    console.log(arr);
    return val;
}
//popFront([1,2,3,4]);

//Insert at - given an array, index, and value, insert that value into the array at the given index.
function insertAt(arr, index, val){
//start the loop at index and insert ???
// shift all values right
arr[arr.length] = arr[arr.length-1];
for(i = arr.length-1; i >index; i--){
    temp = arr[i-1];
    arr[i] = temp; 
}
arr[index] = val;
console.log(arr);
}
//insertAt([1,2,3,4], 2, 5);

//remove at - given an array and index, remove that value from the array.
function removeAt(arr, index){
    //store value to return
    //shift values left starting at index
    //remove last value with pop
    val = arr[index];
    for (i=index;i<arr.length;i++){
        temp = arr[i+1];
        arr[i] = temp;
    }
    arr.pop();
    console.log(arr);
    return val;
}
//removeAt([1,2,3,4,5],3);

//swap pairs - swap values in groups of two. i.e. [1,2,3,4] --> [2,1,4,3]. only swap if a value has a pair. [1,2,3] --> [2,1,3]
function swapPair(arr){
    //if arr[i+1] is undefined, break
    for (var i = 0; i<arr.length;i+=2){
        if(arr[i+1] == undefined){
            break;
        }
        else{
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }

    }
    console.log(arr);
}
//swapPair([0,1,2,3,4]);

// drop duplicates sorted array - no nested loops;
function removeDupes(arr){
    var final = [];
    for (var i = 0; i < arr.length; i++){
        //final[i] = arr[i];
        if (arr[i] !== arr[i-1]){
            final.push(arr[i]);
        }
    }
    console.log(final);
}
removeDupes(["a","b","c","c","d","e","e","f"])
