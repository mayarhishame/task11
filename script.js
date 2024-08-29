const arr = [
  8,
  "55",
  [2, "hello", { a: 2, b: 5 }, false],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "moha", last: [2, false, undefined] },
  },
];

const [
  ,
  ,
  ,
  {
    arr: [, , , [, x]],
    obj: { d: y },
  },
] = arr;

console.log(x);
console.log(y);

//duplicate
// function hasDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) !== index).length > 0;
// }

function hasDuplicates(arr) {
  const seen = {};
  for (const item of arr) {
    const key =
      typeof item === "object" && item !== null ? JSON.stringify(item) : item;
    if (seen[key]) {
      return true;
    }
    seen[key] = true;
  }
  return false;
}

const array = [
  2,
  3,
  [22, "test"],
  false,
  null,
  { a: 22 },
  [22, "test"],
  "null",
];

console.log(hasDuplicates(array));
