import { Component } from '@angular/core';
import { Order } from '../domain/Order';

import { APIService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from '../material/material.module';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatButtonToggleModule, MatFormFieldModule,  MaterialModule, MatSnackBarModule]

})
export class OrderListComponent {
  
  orders: Order[] = [];

  constructor(private apiService: APIService, private snackBar: MatSnackBar) {}
  display = "none";

  // filterOptions = [
  //   {"key": "default", "value" : this.apiService.getOrders}, //all
  //   {"key":"watchlist", "value" : this.apiService.getWatchlist},
  // ]
  ngOnInit(): void {
   
    this.loadOrders();
  }

  loadOrders(): void {
    this.apiService.getOrders().subscribe({
      next: (orders: Order[]) => {this.orders = orders; console.log(orders);},
      error: (error) => console.error('Error occurred ' + error),
    });
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  handleUpdate(ord:Order, newQty:any, newAmt:any, userId: string){
    console.log("orderlist :"+ userId)
    this.apiService.submitOrderModify(
      ord.tradeOrderId,
      ord.stockTickerLabel,
      newAmt !=0 ? newAmt: ord.stockPrice,
      newQty !=0 ? newQty: ord.stockVolume,
      ord.buyOrSell,
      userId
    )

    let message = "Order Added"
    this.snackBar.open(message, 'OK',  {
      duration: 5000,
      // here specify the position
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}
