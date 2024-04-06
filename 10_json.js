// JSON.parse( ) : Convert JSON to Object
// JSON.stringify( ): Covert an object to JSON

let person = {
    name: "vaishnavi",
    city: "Pune",
    experience: 1,
    isMarried: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address:{
      street: "Hadapsar",
      city: "Pune"
    }
} 
console.log(`Type of person is: ${typeof person}`);
const result = JSON.stringify(person);
console.log(`Type of after conversion is: ${typeof result}`);
console.log(result);

const personJSON = `
{
    "name": "vaishnavi",
    "city": "Pune",
    "experience": 10,
    "isMarried": true,
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "address": {
      "street": "Wakad",
      "city": "Pune"
    }
  }
`;

console.log(`======== Convert JSON to Object ===========`);
const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);

console.log(personObject.skills[0]);