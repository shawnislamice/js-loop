const myArray = [100, 200, 300, 400, 500];
let target = 50;
let index = -1;
for (let i = 0; i < myArray.length; i++) {
  let current = myArray[i];
  if (current === target) {
    index = i;
    break;
  }
}
if (index > -1) {
  console.log(`Got it: (Index: ${index}, Target: ${target}) `);
} else {
  console.log(`Sorry! Not found`);
}

