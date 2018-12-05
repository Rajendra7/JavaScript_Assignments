//creating the first person
var person1={ fname:"Rajendra",
lname:"Kappala",
age:21,
skills:["C","Java","Android"],
address:{city:"Ravulapalem",pincode:533238},
dateOfBirt:new Date('16-06-1997'),
profession:"Employee",
married:false}
//creating the second person
var person2={fname:"Robin",
lname:"Kappala",
age:19,
skills:["playing","reading"],
address:{city:"Ravulapalem", pincode:533238},
dateOfBirth:new Date('07-07-1999'),
profession:"Student",
married:false}
//using print function to display output
print=function()
{
    console.log("person1 details\n",person1);
    console.log("person2 details\n",person2);
}
print();
