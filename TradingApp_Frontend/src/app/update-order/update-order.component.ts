import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent {
  constructor(private dataService: APIService){}
  tickers = this.dataService.getTickers();
  modifyForm = new FormGroup(
    {
      id: new FormControl(-1),
      stockTickerLabel:new FormControl(''),
      stockPrice: new FormControl(0),
      stockVolume: new FormControl(0),
      buyOrSell: new FormControl(0),
    }
  )

  tradeTypes = [
    {"key": "BUY", "value": 0},
    {"key": "SELL", "value": 1}
  ]

  handleSubmit() {
    let id = this.modifyForm.value.id ?? -1;

    let orderObservable = this.dataService.orderDetailsByID(id)
    // if (order === null){
    //   alert("Invalid Order Id!")
    //   return
    // }

    orderObservable.subscribe({
      next: (data) => {
        // TODO: Make field editable/uneditable based on 
        // id is valid or not.
        if(data === null || data === undefined){
          alert("Invalid Order Id!")
          return
        }

        this.dataService.submitOrderModify(
          this.modifyForm.value.id?? 0,
          this.modifyForm.value.stockTickerLabel?? '',
          this.modifyForm.value.stockPrice?? 0,
          this.modifyForm.value.stockVolume?? 0,
          this.modifyForm.value.buyOrSell?? 0
        )

        
      },
      error: (error) => console.log(error)
    })

    // this.dataService.submitOrderModify()

  }
}



