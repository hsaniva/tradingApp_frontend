import { Component } from '@angular/core';
import { Order } from '../domain/Order';

import { APIService } from '../service/api.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  
  orders: Order[] = [];

  constructor(private apiService: APIService) {}
  display = "none";
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
  

}
