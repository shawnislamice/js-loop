const fruits = ["Apple", "Banana", "Grape", "Coconut", "Mango", "Litchi"];
for (x of fruits) {
  console.log(x);
}
// Reverse array
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
//Sum of array
const num = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
  sum += num[i];
}
console.log(sum);

//Swapping array elements

const myArray = [10, 20, 30, 40, 50];

let temp = myArray[3];
myArray[3] = myArray[1];
myArray[1] = temp;
console.log(myArray);

let target = 50;
let foundIndex = -1;
for (let i = 0; i < myArray.length; i++) {
  let currentNumber = myArray[i];
  if (currentNumber === target) {
    foundIndex = i;
    break;
  }
}
if (foundIndex > -1) {
  console.log(foundIndex, "Got it");
} else {
  console.log("Not found");
}
//FInd max and min number from an array

const myaray = [100, 200, 300, 400, 500];
let maxNum = myaray[0];
let minNum = myaray[0];
for (let i = 0; i < myaray.length; i++) {
  let currentNumber = myaray[i];
  if (currentNumber > maxNum) {
    maxNum = currentNumber;
  }
  if (currentNumber < minNum) {
    minNum = currentNumber;
  }
}
console.log("Maximum number: " + maxNum);
console.log("Minimum number: " + minNum);

//Array filtering
const purchaseHistory = [100, 300, 500, 150, 125];
const filter = [];
for (let i = 0; i < purchaseHistory.length; i++) {
  const currentElement = purchaseHistory[i];
  if (currentElement <= 200) {
    filter.push(currentElement);
  }
}
console.log(filter);

//USing array method
const filter2 = purchaseHistory.filter(function (currentElement) {
  return currentElement <= 200;
});
console.log(filter2);

//Calculating Discount
const discountPrice = [];
for (let i = 0; i < purchaseHistory.length; i++) {
  const currentElement = purchaseHistory[i];
  if (currentElement > 200) {
    let calculateDiscount = currentElement - (currentElement * 10) / 100;
    discountPrice.push(calculateDiscount);
  } else {
    discountPrice.push(currentElement);
  }
}
console.log(discountPrice);
//Using map
const discountPriceUsingMap = purchaseHistory.map(function (elem) {
  return elem > 200 ? elem - (elem * 10) / 100 : elem;
});
console.log(discountPriceUsingMap);

//Frequency array
const frequencyArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const sampleNumber = "92215115151550515155115";

for (let i = 0; i < sampleNumber.length; i++) {
  const currentDigit = sampleNumber[i];
  frequencyArray[currentDigit]++;
}
console.log(frequencyArray);
//Find out maximum occurrence
let maxOccurrence = frequencyArray[0];
for (let i = 0; i < frequencyArray.length; i++) {
  const currentOccurance = frequencyArray[i];
  if (currentOccurance > maxOccurrence) {
    maxOccurrence = currentOccurance;
    maxOccurrenceIndex = i;
  }
}
console.log(maxOccurrenceIndex, maxOccurrence);

//Serial Change
const serial = [22, 33, 44, 55, 66, 77, 88];
let target2 = 55;
while (true) {
  const firstElement = serial[0];
  if (firstElement === target2) {
    break;
  }
  const extractedElement = serial.shift();
  serial.push(extractedElement);
}
console.log(serial);
