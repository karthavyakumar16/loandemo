import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { Address } from '../model/Address';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  account=new Account('','','','','',new Address('','','','',''));
  constructor(private accountService:AccountService){

  }
  createaccount(){

console.log(JSON.stringify(this.account))
this.accountService.createAccount(this.account).subscribe(
  data=>{
    this.accountNumber=data.accountNumber;
  }
);


  }

}
