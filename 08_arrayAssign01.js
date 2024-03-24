const fruits_seasonal= ["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`==== 1]First and Last element on console====`);
var firstElement=fruits_seasonal[0];
var lastElement=fruits_seasonal[fruits_seasonal.length-1];
console.log(`First Element in array :${firstElement} and Last Element:${lastElement}`);

console.log(`====2]Element Before the element 'banana'and then log array on console====`);
console.log(`Array Before Adding ${fruits_seasonal}`);
fruits_seasonal.unshift('Papaya');
console.log(`Array After Adding ${fruits_seasonal}`);

console.log(`====3]Remove Element Mango From array====`);
console.log(`Array Before removing ${fruits_seasonal}`);
fruits_seasonal.splice(4,1);
console.log(`Array After removing ${fruits_seasonal}`);

console.log(`==== 4]add Element or insert an element'Pineapple' at last====`);
console.log(`Array Before Adding ${fruits_seasonal}`);
fruits_seasonal.push('Pineapple');
console.log(`Array After Adding ${fruits_seasonal}`);

console.log(`==== 5]insert an element'Dragon Fruit' before 'Water Melon'====`);
console.log(`Array Before Adding ${fruits_seasonal}`);
fruits_seasonal.splice(4, 0, 'Dragon Fruit');
console.log(`Array After Adding ${fruits_seasonal}`);

console.log(`==== 6]Replace an element 'Orange' before 'Kiwi'====`);
console.log(`Array Before Replace ${fruits_seasonal}`);
const orangeIndex = fruits_seasonal.indexOf('Orange');
fruits_seasonal[orangeIndex] = 'Kiwi';
console.log(`Array After Replace ${fruits_seasonal}`);

console.log(`==== 7]Log the Elements starting from index 1 to 4====`);
console.log(`Array:${fruits_seasonal}`);
const slicedArray = fruits_seasonal.slice(1, 4);
console.log(`Sliced Array: ${slicedArray}`);

console.log(`==== 8]Select the last 3 elements and console the length====`);
console.log(`Array:${fruits_seasonal}`);
const lastThreeElements = fruits_seasonal.slice(-3);
console.log(`array:${lastThreeElements}`);
console.log(`Length of array:${lastThreeElements.length}`);







