for (let i = 0; i <= 15; i++) {
  console.log(i);
  if (i >= 10) {
    break;
  }
}
for (let i = 0; i <= 15; i++) {
  if (i === 10) {
    continue;
  }
  console.log(i);
}
for (let i = 1; i <= 15; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}
let i = 0;
while (i < 5) {
  i++;
  if (i === 2) {
    continue;
  }
  console.log(i);
}
