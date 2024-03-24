const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`=====1]console the length of array and array=====`);
console.log(`array:${arrayNumber}`)
console.log(`Length of array:${arrayNumber.length}`)

console.log(`======2]log the 1st and last element======`);
console.log(`First Element:${arrayNumber[0]} and Last element: ${arrayNumber[arrayNumber.length-1]}`)

console.log(`====3]log the 3rd last element======`);
console.log(` Third Last element: ${arrayNumber[arrayNumber.length-3]}`)

console.log(`======4]log  all the even element======`);
for (const value of arrayNumber) {
    if (value % 2 === 0) {
    console.log(value);
  }
}
console.log(`=====5]log  all the odd element=====`);
for (const value of arrayNumber) {
    if (value % 2 ==! 0) {
    console.log(value);
  }
}

console.log(`======6]Even index elements=====`);
let count = 0;
for (const index in arrayNumber) {
    if (index % 2 === 0) {
      count+= arrayNumber[index];;
    }
}
console.log(`Sum of even index values: ${count}`);

console.log(`=====7]Even index elements=====`);
let sum = 0;
for (const index in arrayNumber) {
    if (index % 2 ==! 0) {
      sum+= arrayNumber[index];;
    }
}
console.log(`Sum of odd index values: ${sum}`);

console.log(`======8]Sum of all elements======`);
let arraySum = 0;
for (const index in arrayNumber) {
    arraySum+= arrayNumber[index];;
    }
console.log(`Sum of all array elements ${arraySum}`);

console.log(`======9]Find the numbers which are multiples of 5======`);
for (const number of arrayNumber) {
    if (number % 5 === 0) {
        console.log(`${number}`);
    }
}
console.log(`=======10]is number 115 there in the array========`);
console.log(`Array: ${arrayNumber}`);
if (arrayNumber.includes(115)) {
    console.log(`Number 115 is present:${arrayNumber}`);
} else {
    console.log(`not found in array${arrayNumber}`);
}

console.log(`========11]is no 23 is there in array=======`);
console.log(`array:${arrayNumber}`);
    if (arrayNumber.includes(23)) {
        console.log(`array index:${arrayNumber}`); 
    }else{
        console.log(`not found in array${arrayNumber}`);
    }

console.log(`========12]insert no 55,66 at index 3========`);
console.log(`array:${arrayNumber}`);
arrayNumber.splice(3,0,55,66);
console.log(`array after 55,66 inserting :${arrayNumber}`)

console.log(`=======13]Deleting 3 elements starting from index 4========`);
console.log(`Array: ${arrayNumber}`);
const deletedElements = arrayNumber.splice(4, 3);
console.log(`Array after deleting: ${arrayNumber}`);
console.log(`Deleted elements: ${deletedElements}`);

