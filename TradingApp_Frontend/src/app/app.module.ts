import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeleteOrderViewComponent } from './delete-order-view/delete-order-view.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CancelOrderButtonComponent } from './cancel-order-button/cancel-order-button.component';
import { UpdateOrderButtonComponent } from './update-order-button/update-order-button.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AddOrderComponent,
    AppComponent,
    DeleteOrderViewComponent,
    OrderListComponent,
    UpdateOrderComponent,
    CancelOrderButtonComponent,
    UpdateOrderButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
