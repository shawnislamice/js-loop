let sum = 0; // Declare and initialize sum here
for (let i = 0; i < 30; i++) {
  sum += i;
  if (sum >= 100) {
    break;
  }
}
console.log(`Sum is ${sum}`);

let index = 0;
while (index < 30) {
  sum += index;
  index++;
  if (sum >= 100) {
    break;
  }
}

console.log(`Sum is ${sum}`);
