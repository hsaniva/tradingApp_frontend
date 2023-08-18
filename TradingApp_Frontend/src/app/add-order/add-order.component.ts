import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {

  constructor(private dataService: APIService){}
  
  orderForm = new FormGroup(
    {
      stockTickerLabel:new FormControl(''),
      stockPrice: new FormControl(0),
      stockVolume: new FormControl(0),
      buyOrSell: new FormControl("BUY"),
    }
  )


// tickers = {
//   "Meta Platforms, Inc.": "META",
//   "Apple Inc.": "APPL",
//   "Netflix, Inc.": "NFLX",
//   "Alphabet Inc.": "GOOG",
//   "Alphabet Inc.": "GOOGL",
//   "Uber Technologies, Inc.":"UBER"
// }

  tickers = this.dataService.getTickers()

  tradeTypes = [
    {"key": "BUY", "value": "BUY"},
    {"key": "SELL", "value": "SELL"}
  ]




  handleSubmit(){
    console.log("submit clicked")

    this.dataService.submitOrderCreate(
    this.orderForm.value.stockTickerLabel ?? '',
    this.orderForm.value.stockPrice?? 0,
    this.orderForm.value.stockVolume?? 0,
    this.orderForm.value.buyOrSell?? "BUY",
    )

  }
};
