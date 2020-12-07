//Reverse - given a numerical array, reverse the order of values in place.
function reverse(arr){
    var temp; //temporarily stored value
    var counter = arr.length -1;
    var length;
        if(arr.length %2 == 0){
            length = arr.length / 2;
        }
        else {
            length = (arr.length - 1)/2;
        }
    for(var i = 0; i < length; i++){
        temp = arr[i];
        arr[i] = arr[counter-i];
        arr[counter-i] = temp;
    }
    console.log(arr);
}
//reverse([0,1,2,3,4]);

//Rotate array - input an array and amount to shift values by. end points will wrap around to the start of the array 
function rotate(arr, shiftBy){
    var temp;
    //Shift Left
    if (shiftBy < 0){
        for (var i = shiftBy; i < 0; i++){
            for (var j = 0; j < arr.length-1; j++){
                if (j == 0){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    }
                else{
                    arr[j] = arr[j+1];
                }
            //    console.log(arr[i]);
            }
            arr[arr.length-1] = temp;
        }
    }
    //Shift Right
    else{
        for (var i = shiftBy; i > 0; i--){
            for (var j = arr.length-1; j > 0; j--){
                if (j == arr.length-1){
                    temp = arr[j];
                    arr[j] = arr[j-1];
                    }
                else{
                    arr[j] = arr[j-1];
                }
            //    console.log(arr[i]);
            }
            arr[0] = temp;
        }
        }
    console.log(arr);
}
//rotate([0,1,2,3,0,1], -2000000);

// filter range - input an array and min / max conditions, return array with only values in between min and max indices.
function filter(arr, min, max){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min || arr[i] > max){
            delete arr[i];
            arr.length = arr.length -1;
        }
    }
    console.log(arr);
}
//filter([1,2,3,4,5,6,7], 3, 5);

//Concat - ([a,b],[1,2] --> [a,b,1,2])
function arrConcat(arr1, arr2){
    var arr = [];
    var index = -1;
    for (var i = 0; i < arr1.length; i++){
        arr[i] = arr1[i];
        index +=1;
    }
    for (var i = 1; i < arr2.length+1; i++){
        arr[index+i] = arr2[i-1]; 
       // console.log(arr);
    }
    console.log(arr);
}
//arrConcat([0,1,2],[3,4,5]);
arrConcat(["a","b"], [1,2,4,5,6,"c"]);