import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoansearchComponent } from './loansearch/loansearch.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [ 
  {path:'createaccount',component:CreateaccountComponent},
  {path:'loansearch',component:LoansearchComponent},
  {path:'userdetails',component:UserdetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
