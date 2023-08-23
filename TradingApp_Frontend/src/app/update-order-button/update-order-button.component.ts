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
    tradeOrderId: -1,
    stockTickerLabel: 'Dummy',
    stockPrice: -1,
    stockVolume: -1,
    buyOrSell: 'Dummy',
    stockStatusCode: 'Dummy'

  };

  openModal() {
    
    
    this.dataService.orderDetailsByID(parseInt(this.id)).subscribe(
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
