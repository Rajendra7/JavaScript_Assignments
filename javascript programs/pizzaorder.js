function pizzaOrderSubmit(document){
    var name=orderForm.name_text.value;
    var email=orderForm.email.value;
    var toppings="";
    var order="";
    var tip="";
	var address=orderForm.address_text.value;
}
for(i=0;i<=3;i++){
    if(orderForm.size_select[i].checked==true){
        size=orderForm.size_select[i].value;
    }
}
if(orderForm.Extra_Cheese.checked==true){
    toppings+=orderForm.Extra_Cheese.value;
    toppings+=", ";
}
if(orderForm.pepperoni.checked==true){
    toppings+=orderForm.pepperoni.value;
    toppings+=", ";
}
if(orderForm.Olives.checked==true){
    toppings+=orderForm.Olives.value;
    toppings+=", ";
}
if(orderForm.pepper.checked==true){
    toppings+=orderForm.pepper.value;
    toppings+=", ";
}
if(orderForm.Bacon.checked==true){
    toppings+=orderForm.Bacon.value;
    toppings+=", ";
}
if(orderForm.Tomatoes.checked==true){
    toppings+=orderForm.Tomatoes.value;
    toppings+=", ";
}
if(orderForm.Mushrooms.checked==true){
    toppings+=orderForm.Mushrooms.value;
}
    order+="Name: " + name;
	order+="\n";
	order+="email: " + email;
	order+="\n";
	order+="toppings: " + toppings;
	order+="\n";
	order+="Delivery: " + order;
	order+="\n";
	order+="tip: " + tip;
	order+="\n";
	order+="address: " + address;

    orderConfirm.order_text.value=order;
   
    
    function addNums(form2){
        var num1=eval(form2.txtFirstNum.value);
        var num2=eval(form2.txtSecNum.value);
        alert(num1+num2);
    }
    