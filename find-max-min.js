const myArray = [100, 200, 300, 400, 500];
let maxNumber = myArray[0];
let minNumber = myArray[0];
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > maxNumber) {
    maxNumber = myArray[i];
  } else if (myArray < minNumber) {
    minNumber = myArray[i];
  } 
}
console.log(`Maximum number: ${maxNumber}`);
console.log(`Minimum number: ${minNumber}`);
