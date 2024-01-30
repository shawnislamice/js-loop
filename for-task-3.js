let sum = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum += i;
}
console.log(sum);

let i = 51;
while (i <= 85) {
  if (i % 2 !== 0) {
    i++;
    continue;
  }
  i++;
  sum += i;
}
console.log(sum);
