import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomercardviewComponent } from './customercardview/customercardview.component';

const routes: Routes = [
  {path:'cust',component:CustomercardviewComponent}
];

@NgModule({
  declarations:[CustomercardviewComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
