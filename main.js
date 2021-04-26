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
    console.log('number', number)
    console.log('numStringArr', numStringArr)
    console.log('numLength', numLength)

    let phoneticNumber = "";

    // for loop to .concat() each digit into one string

    result.push(phoneticNumber);
  });

  return result;
};

console.log(stringToPhonetic([3, 25, 209]));
