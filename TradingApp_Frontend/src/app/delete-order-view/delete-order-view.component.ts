import { Component } from '@angular/core';
import { APIService } from '../service/api.service';
@Component({
  selector: 'app-delete-order-view',
  templateUrl: './delete-order-view.component.html',
  styleUrls: ['./delete-order-view.component.css']
})


export class DeleteOrderViewComponent {

  
  constructor(private apiService: APIService) {
  
  }

 

  DeleteOrder(id: string): void {
    console.log(id)
    this.apiService.deleteOrder(Number(id));
  }

}
