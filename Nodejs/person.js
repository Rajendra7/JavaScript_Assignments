function Person(fname,lname,age,skills,address,dateOfBirth,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.address=address;
    this.dateOfBirth=dateOfBirth;
    this.married=Boolean(married);
    this.profession=profession;
    this.print=function(){
        console.log(this.fname,this.lname,this.age,this.skills,this.address,this.dateOfBirth,this.married,this.profession); 
    }
}
var person= new Person("Rajendra","Kappala",21,"c,java","Andhra pradesh-533238","16-06-1997","married","software engineer");
var person2= new Person("Teja","Yenumula",21,"c,java","Andhra pradesh-516360","24-08-1997","unmarried","Network Engineer");
person.print();
person2.print();