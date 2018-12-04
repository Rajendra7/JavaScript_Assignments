function Account( accountNumber,accountHolderName,accountBalance,salary) {
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.accountBalance=accountBalance;
    this.salary=salary;
  }
  function withdraw(amount)
  {
      if(this._isAllowed(amount)){
          this.balance-=amount;
          return true;
      }
          return false;
  }
  
 function withdraw(amount){
    const isPositive = amount > 0;
    if (!isPositive) {
      console.error('Amount must be positive!');
      return false;
    }
    return true;
  }
  var savings=new Account(12345,"Raj",1200,12000);
  console.log(savings);