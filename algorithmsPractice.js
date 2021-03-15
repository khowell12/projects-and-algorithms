//1. write a function that will print out all the nubmers from 1 to 255
function oneto155(){
	for (var i = 0; i < 255; i++){
		console.log(i);
	}
}
//Oneto155();
//2. Print odds from 1 to 1000
function oddsto1000(){
	for (var i = 0; i <1000; i++){
		if (i % 2 != 0){
			console.log(i);
		}
	}
}
//Oddsto1000();
//3. Print the sum of all odds from 1 to 5000
function sumOddsTo5000(){
	var sum = 0;
	for (var i = 0; i<5000; i++){
		if (i % 2 != 0){
			sum += i;
		}
	}
	console.log(sum);
}
//SumOddsTo5000();
//4. Print all values of an array
function printArray(arr){
	for (var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}
//printArray([1,2,3,4]);
//5. Print max number in array
function printMax(arr){
	var max = arr[0];
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	console.log(max);
}
//printMax([13,4,100,-2,0,1000,5]);
//6. Print average
function average(arr){
	var sum = 0;
	var avg = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
		avg = sum / (i+1);
	}
	console.log(avg);
}
average([5,5,10,4]);