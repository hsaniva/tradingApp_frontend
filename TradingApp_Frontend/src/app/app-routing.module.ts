import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO 1 add some imports
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { DeleteOrderViewComponent } from './delete-order-view/delete-order-view.component';

// TODO 2 create routes array
const routes: Routes = [
 { path: 'list', component: OrderListComponent },
 { path: 'add', component: AddOrderComponent},
 { path: 'delete', component: DeleteOrderViewComponent},

 { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }