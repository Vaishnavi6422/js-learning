// Wap to print from 0 to 10
console.log( "Wap to print from 0 to 10");
for(let i=0;  i<=10;  i++){
    console.log(i);
}
console.log( "Wap to print from 15 to 24");
for(let i=15;  i<=24;  i++){
    console.log(i);
}
console.log( "Wap to print from 10 to 5");
for(let i=10;  i>=5;  i--){
    console.log(i);
}
console.log( "Wap to print even no  from 0 to 20");
for(let i=0;  i<=20;  i=i+2){
    console.log(i);
}
console.log(` WAP to print ODD numbers from 15 to 29`);
for (let index = 15; index <=29; index=index+2) {
    console.log(index); 
}

var word = "JavaScript";
for (let index = 0; index<word.length; index++) {
    var element = word.charAt(index);
    console.log(element);
}

console.log(` WAP to count char a in JavaScript`);
var word = "JavaScript";
count=0;
for (let index = 0; index<word.length; index++) {
    var char = word.charAt(index);
    if (char=='a') {
        count = count+1;
    }  
}
console.log(`Char a count is: ${count}`);