const myArray = [100, 200, 300, 400, 500];

let temp = myArray[2];
myArray[2] = myArray[1];
myArray[1] = temp;
console.log(`After swapping ${myArray}`);
