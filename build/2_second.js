"use strict";
//ex1
let firstName;
firstName = "Gayatri";
console.log(firstName);
// //ex2 
// let canDrive:boolean=false
// let age=18
// if(age>=18){
//     canDrive=true
// }
// else{
//     canDrive=false
// }
// console.log(canDrive)
//ex3
let student1 = {
    firstName: "Gayatri",
    lastName: "Mahale"
};
let student2;
student2 = {
    firstName: "Gayatri",
    lastName: "Mahale",
    age: 30
};
console.log(student2);
//ex4    Array
let city = [];
city.push("Pune");
city.push("Nagpur");
city.push("Nashik");
console.log(city);
city.forEach(function (el) {
    console.log(el.toUpperCase());
});
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(function (el) {
    console.log(el);
});
//ex 5 Array of fixed length Tuple
let info;
info = ["Gayati", "Mahale", 12];
//info=[12,12,12]   //error
console.log(info);
//ex6 enum
//admin
//supervision
//sr_supervisor
//customer
//client
//manager
//sr_manager
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["supervisor"] = 1] = "supervisor";
    Roles[Roles["customer"] = 2] = "customer";
    Roles[Roles["client"] = 3] = "client";
    Roles[Roles["manager"] = 4] = "manager";
    Roles[Roles["sr_manager"] = 5] = "sr_manager";
})(Roles || (Roles = {}));
if (Roles.sr_manager) {
    console.log('senior manager');
}
console.log(Roles.sr_manager);
