import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO 1 add some imports
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { DeleteOrderViewComponent } from './delete-order-view/delete-order-view.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { MarketviewComponent } from './marketview/marketview.component';


// TODO 2 create routes array
const routes: Routes = [
 { path: 'list', component: OrderListComponent },
 { path: 'add', component: AddOrderComponent},
 { path: 'delete', component: DeleteOrderViewComponent},
 { path: 'portfolio', component: UserPortfolioComponent},
 { path: 'update', component: UpdateOrderComponent},
 { path: 'market', component: MarketviewComponent},

 { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
