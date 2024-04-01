console.log(`========Object1 ==========`);
const bankSbi = {
    Name: "Vaishnavi Shidlambe",
    AccountType: "Saving",
    AccNo: 1234567,
    Balance: 50000,
}
console.log(bankSbi);
console.log(`========Object2==========`);
const bankLocation = {
    Street: "Jalna Road",
    City: "Chhatrapti Sambhajinagar",
    Pin:431001,
}
console.log(bankLocation);

console.log(`========clone1==========`);
const bankSbiClone = Object.assign({},bankSbi);
console.log(bankSbiClone);
console.log(`========clone2==========`);
const bankLocationClone = Object.assign({},bankLocation);
console.log(bankLocationClone);

console.log(`========Object3==========`);
const rateOfInterest = {
    homeLoanInterest:'8.5%' ,
    personalLoanInterest:'6.50%',
    duwInterest:'2.0%',
}
console.log(rateOfInterest);


const bankDetails = Object.assign({}, bankSbi, bankLocation,rateOfInterest);
console.log(`======Merged object=========`);
console.table(bankDetails);
for (let key in bankDetails) {
    console.log(`${key}: ${bankDetails[key]}`);
}