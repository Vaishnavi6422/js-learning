class Person{
name
city
age 
constructor(name,city,age){
this.name=name;
this.city=city;
this.age=age;
}
Details(){
console.log(`Person Details => Name:${this.name},city:${this.city},age:${this.age}`);
}
}
const vaishnavi= new Person("vaishnavi","pune",22);
vaishnavi.Details();
const aditya= new Person("aditya","pune",22);
aditya.Details();
const gauri= new Person("gauri","pune",20);
gauri.Details();
console.log(`===== Traversing array object ======`);
const array=[vaishnavi,aditya,gauri];
for(const element of array){
    element.Details();
}