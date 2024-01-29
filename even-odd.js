let total = 0;
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
for (let i = 1; i <= 20; i += 2) {
  //   console.log(i);
  if (i % 3 === 0) {
    console.log(i);
    total += i;
  }
}
console.log(`Sum is ${total}`);
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
  if (i % 5 === 0) {
    console.log(i);
    total += i;
  }
}

console.log(`Sum is ${total}`);
