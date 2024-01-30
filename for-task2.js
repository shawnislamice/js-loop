for (let i = 61; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

let i = 78;
while (i <= 98) {
  if (i % 2 !== 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
