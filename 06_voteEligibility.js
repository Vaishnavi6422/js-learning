// vote eligible
//  age 45,17,8,20,-10,200,0,null

var ageEligibility = function(age) {
     if (age <= 0 || age > 130) {
        console.log("Invalid data",age);
    } else if (age < 18) {
        console.log("Not eligible for Vote",age);
    } else {
        console.log("Eligible for Vote",age);
    }
}

ageEligibility(45);
ageEligibility(17);
ageEligibility(8);
ageEligibility(20);
ageEligibility(-10);
ageEligibility(200);
ageEligibility(0);
ageEligibility(null);
