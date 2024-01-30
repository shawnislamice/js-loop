const myArray = [100, 200, 300, 400, 500];
const discount = [];
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > 250) {
    discount.push(myArray[i] - myArray[i] * (10 / 100));
  } else {
    discount.push(myArray[i]);
  }
}
console.log(discount);

//Another method
const discount2 = myArray.map(function (element) {
  return element > 250 ? element - element * (10 / 100) : element;
});
console.log(discount2);
