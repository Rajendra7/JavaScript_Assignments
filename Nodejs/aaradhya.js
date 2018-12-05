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
//creating object for person3
var Aaradhya={fname:"Aaradhya",
age:12,
skills:["playing"],
dateOfBirth:new Date('22-11-2006'),
profession:"Student",
married:false}
console.log(Abishek); //it prints only Abishek details
console.log(Amitabh);  //it prints only Amitabh details
print=function()
{
    var Abishek=Object.create(Amitabh);//By creating object we are accessing properties from person1
    var Aaradhya=Object.create(Amitabh);//By creating object we are accessing properties from person1
    console.log(Amitabh.fname);
    console.log(Abishek.lname);
    console.log(Aaradhya.lname);
    console.log(Abishek.address);
}
print();