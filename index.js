let n = 181;

let setBitCount = 0;
while (n !== 0) {
  console.log(n);
  console.log(n.toString(2));
  console.log(n - 1);
  console.log((n - 1).toString(2));
  n &= n - 1;
  console.log(n);
  console.log("---");
  setBitCount++;
}
console.log(setBitCount);
