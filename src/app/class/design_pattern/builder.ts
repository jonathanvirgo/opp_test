interface Builder{
       setAccountNumber($accountNumber);
       setOwner($owner);
       setBranch($branch);
       setBalance($balance);
       setInterestRate($interestRate);
       build();
}
export class BankAccountBuilder implements Builder
{
     private accountNumber;
     private owner;
     private branch;
     private balance;
     private interestRate;
     public  setAccountNumber(accountNumber){
          this.accountNumber = accountNumber;
          return this;
     }
     public  setOwner($owner){
          this.owner = $owner;
          return this;
     } 
     public  setBranch($branch){
          this.branch = $branch;
          return this;
     }
     public  setBalance($balance){
          this.balance = $balance;
          return this;
     }
     public  setInterestRate($interestRate){
          this.interestRate = $interestRate;
          return this;
     }
     public  build(){
          return new BankAccount(this.accountNumber, this.owner, this.branch, this.balance, this.interestRate);
     }
}
 export class BankAccount
{
     private accountNumber;
     private owner;
     private branch;
     private balance;
     private interestRate;
     constructor(accountNumber, owner, branch, balance, interestRate)
     {
          this.accountNumber = accountNumber;
          this.owner = owner;
          this.branch = branch;
          this.balance = balance;
          this.interestRate = interestRate;
     }
     public  getAccountNumber(){
          return this.accountNumber;
     }
     public  getOwner(){
          return this.owner;
     }

     public  getBranch(){    
          return this.branch;
     }
     public  getBalance(){
          return this.balance;
     }
     public  getInterestRate(){
          return this.interestRate;
     }
     public  showInfo(){
              return " Number: " + (this.getAccountNumber() ? this.getAccountNumber() : null) +
         
               " Owner: " + (this.getOwner() ? this.getOwner(): null) +
         
                " Branch: " + (this.getBranch() ?  this.getBranch() : null) + 
        
                " Balance: " + (this.getBalance() ? this.getBalance() : null) +
        
             " Interest Rate: " + (this.getInterestRate() ? this.getInterestRate() : null);
     }
}