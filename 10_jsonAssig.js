var PersonalDetail = `{
    "name": "Vaishnavi Shidlambe",
    "id": "852023",
    "role": ["Dev", "MBA"],
    "age": 24,
    "DOJ": "08-05-2023",
    "Married": false,
    "Address": {
        "street": "solapur road",
        "city": "pune",
        "country": "India"
    },
    "Referred-By": "E012131"
}`;

console.log(PersonalDetail);

var ConvertedObjected = JSON.parse(PersonalDetail);
console.log(ConvertedObjected.role[0]);
console.log(ConvertedObjected.name.split(' ')[1]);
console.log(new Date(ConvertedObjected.DOJ).getFullYear());


