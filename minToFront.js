//given an array of comparable values,move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    var lowest = arr[0];
    var index = 0;
    //find lowest value
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < lowest){
            lowest = arr[i];
            index = i;
        }

    }
    console.log("the lowest value is "+ lowest +" at index " + index);
    //shift lowest value left to front
    for (var i = index; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = lowest;
    console.log(arr);
}
minToFront([4,5,6,2,3,0,7]);