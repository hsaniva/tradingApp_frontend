import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeleteOrderViewComponent } from './delete-order-view/delete-order-view.component';

const routes: Routes = [
  {path: "delete", component:DeleteOrderViewComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DeleteOrderViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
