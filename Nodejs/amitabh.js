//creating the person named Amitabh
var Amitabh={ fname:"Rajendra",
lname:"Kappala",
age:21,
skills:["C","Java","Android"],
address:{city:"Ravulapalem",pincode:533238},
dateOfBirt:new Date('16-06-1997'),
profession:"Employee",
married:false}
//creating the person named Abhishek
var Abishek={fname:"Robin",
lname:"Kappala",
age:19,
skills:["playing","reading"],
address:{city:"Ravulapalem", pincode:533238},
dateOfBirth:new Date('07-07-1999'),
profession:"Student",
married:false}
console.log(Abishek);
print=function()
{
    var Abishek=Object.create(Amitabh); //By creating object we are accessing properties from person1
    console.log(Amitabh.fname);
    console.log(Abishek.lname);
    console.log(Abishek.address);
}
print();