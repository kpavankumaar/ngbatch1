import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersRoutingModule } from './orders/orders-routing.module';
import { CustomersRoutingModule } from './customers/customers-routing.module';

const routes: Routes = [
    {path:'customers',loadChildren:'./customers/customers.module#CustomersModule'},
    {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
    {path:'',redirectTo:'customers', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
