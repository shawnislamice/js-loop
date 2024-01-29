let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

let i = 0;
do {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(i);
} while (i < 10);
let i2 = 0;
do {
  i2++;
  if (i2 === 3) {
    break;
  }
  console.log(i2);
} while (i2 < 10);
