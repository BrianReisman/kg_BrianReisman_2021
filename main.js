const stringToPhonetic = (arr) => {
  const result = [];
  const strings = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  arr.forEach((number) => {
    const numStringArr = number.toString().split("");
    const numLength = number.toString().length;
    let phoneticNumber = "";

    for (let i = 0; i < numLength; i++) {
      phoneticNumber = phoneticNumber.concat(strings[numStringArr[i]]);
    }
    result.push(phoneticNumber);
  });

  return result;
};

console.log("return >>>", stringToPhonetic([3, 25, 209]));
console.log("return >>>", stringToPhonetic([10, 300, 5]));
