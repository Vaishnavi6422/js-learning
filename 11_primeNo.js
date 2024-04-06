
const array = [3,9,7,6,19,29,53];
let primeCount = 0;
for (const num of array) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeCount++;
    }
}
console.log(`Count of prime numbers: ${primeCount}`);

var Sentence1 = "Revision is the mother of success";
var Sentence2 = "Java Script in the language of internet world";
function spaceCount(value) {
    var count = 0;
    for (var i = 0; i < value.length; i++) {
        if (value[i] === ' ') {
            count++;
        }
    }
    return count;
}
var spacesInSentence1 = spaceCount(Sentence1);
var spacesInSentence2 = spaceCount(Sentence2);
console.log("Number of spaces in Sentence1:", spacesInSentence1);
console.log("Number of spaces in Sentence2:", spacesInSentence2);