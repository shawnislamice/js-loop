const myArray = [1, 2, 3, 4, 5];
//First method
let i = 0;
for (x of myArray) {
  i++;
  console.log(`Element ${i} is: ${x}`);
}

//Second method
for (let i = 0; i < myArray.length; i++) {
  console.log(`Element ${i+1} is: ${myArray[i]}`);
}
