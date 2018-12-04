function myfunction() {
    var y=document.getElementById("text1").value;
    if(y.length<1)
    {
        window.alert("Invalid Input");
        return false;
    }
    if(isNaN(y))
    {
        window.alert("please enter numeric values");
        return false;
    }
    var z=(y-32)*(5/9);
    document.getElementById("text2").value=z;
}