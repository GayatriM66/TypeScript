//ex1

let firstName: string
firstName = "Gayatri"
console.log(firstName)




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
}


let student2: { firstName: string, lastName: string, age: number }
student2 = {
    firstName: "Gayatri",
    lastName: "Mahale",
    age: 30
}
console.log(student2)



//ex4    Array
let city:string[]=[];
city.push("Pune")
city.push("Nagpur")
city.push("Nashik")
console.log(city)


city.forEach(function (el){
    console.log(el.toUpperCase())
})


let numbers:number[]=[1,2,3,4,5,6]
numbers.forEach(function(el){
    console.log(el)
})



//ex 5 Array of fixed length Tuple
let info:[string,string,number]
info=["Gayati","Mahale",12]
//info=[12,12,12]   //error
console.log(info)




//ex6 enum

//admin
//supervision
//sr_supervisor
//customer
//client
//manager
//sr_manager
enum Roles{
    admin,
    supervisor,
    customer,
    client,
    manager,
    sr_manager
}

if(Roles.sr_manager){
    console.log('senior manager')
}
console.log(Roles.sr_manager)


















