const myArray = [1, 2, 3, 4, 5];
for (let num of myArray) {
  console.log(`No ${num} element is: ${myArray[num]}`);
}

for (let i = 0; i < myArray.length; i++) {
  console.log(`No ${i + 1} element is: ${myArray[i]}`);
}

for (let i = 0; i <= 10; i++) {
  console.log(`No ${i+1} is: ${i}`);
}
