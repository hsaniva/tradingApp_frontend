import { Component } from '@angular/core';
import { APIService } from '../service/api.service';
@Component({
  selector: 'app-delete-order-view',
  templateUrl: './delete-order-view.component.html',
  styleUrls: ['./delete-order-view.component.css']
})


export class DeleteOrderViewComponent {

  
  id:number = 1;
  constructor(private apiService: APIService) {
  
  }

 

  DeleteOrder(): void {
    this.apiService.deleteOrder(this.id);
  }

}
