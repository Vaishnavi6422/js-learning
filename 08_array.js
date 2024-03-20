let arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(arrayNumbers);

console.log(`====== Total Elements or length =========`);
console.log(`${arrayNumbers.length}`);

console.log(`====== Accessing array elements =========`);
const element0 = arrayNumbers[0];
console.log(`0th element is: ${element0}`);
console.log(`3rd index element from the array is : ${arrayNumbers[3]}`);

console.log(`====== Accessing array's last elements =========`);
console.log(arrayNumbers[5]);

console.log(`Accessing last element using length property`);
const len = arrayNumbers.length;
console.log(arrayNumbers[len-1]);