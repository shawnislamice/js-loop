const myArray = [100, 200, 300, 400, 500];
const filteredArray = [];
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] >= 200) {
    filteredArray.push(myArray[i]);
  }
}
console.log(`Before filtering ${myArray}`);
console.log(`After filtering ${filteredArray}`);

//Another method
const filteredArray2 = myArray.filter(function (element) {
  return element >= 200;
});
console.log(`Before filtering ${myArray}`);
console.log(`After filtering ${filteredArray2}`);
