const sample = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const target = "51110000078484121515184251";
for (let i = 0; i < target.length; i++) {
  sample[target[i]]++;
}
console.log(sample);

let maxOccurrence = sample[0];
for (let i = 0; i < sample.length; i++) {
  if (sample[i] > maxOccurrence) {
    maxOccurrence = sample[i];
    maxOccurrenceIndex = i;
  }
}
console.log(`Max Occurrence at index ${maxOccurrenceIndex} is: ${maxOccurrence}`);
