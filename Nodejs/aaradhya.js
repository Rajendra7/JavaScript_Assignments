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
var amitabh= new Person("Rajendra","Kappala",21,"c,java","Andhra pradesh-533238","16-06-1997","unmarried","software engineer");
var abhishek= Object.create(amitabh);
var aaradhya=Object.create(amitabh,abhishek);
abhishek.fname="Teja";
abhishek.dateOfBirth="24-08-1997";
aaradhya.fname="Aaradhya";
aaradhya.age="10";
aaradhya.dateOfBirth="12-12-12";
aaradhya.profession="student";
amitabh.print();
abhishek.print();
aaradhya.print();