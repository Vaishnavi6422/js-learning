console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`========== includes() ==================`);
var str ="my name is vaishnavi ";

console.log(str.includes('name'));

console.log(`========== trim() ==================`);
var str = "   Good Morning    ";
console.log(`${str} the string length is ${str.length}`);
str = str.trim(); 
console.log(`${str.length}`);
console.log(`the trimmed value is ${str}`);



console.log(`========== slice() ==================`);
var str ="Developers World! ";
console.log(str.slice(0,10));

