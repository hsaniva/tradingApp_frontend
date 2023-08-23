import { Input,Component } from '@angular/core';
import { APIService } from '../service/api.service';
import { Order } from '../domain/Order';

@Component({
  selector: 'app-update-order-button',
  templateUrl: './update-order-button.component.html',
  styleUrls: ['./update-order-button.component.css']
})
export class UpdateOrderButtonComponent {
  constructor(private dataService: APIService){}
  display="none";

  @Input()
  id :string ="";
  
  order: Order = {
    tradeOrderId: '',
    stockTickerLabel: 'Dummy',
    stockPrice: -1,
    buyOrSell: "BUY",
    stockVolume: 1,
    stockStatusCode: "PENDING",
    createdOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)  ,
    updatedOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    userId: "1",

  };

  openModal() {
    
    
    this.dataService.orderDetailsByID(this.id).subscribe(
      data => { this.order = data;
        this.display = "block"; },
    );
    

  }
  onCloseHandled() {
    this.display = "none";
  }

  onUpdateHandled() {
    this.display = "none";
    console.log(this.order);
    
  }


}
