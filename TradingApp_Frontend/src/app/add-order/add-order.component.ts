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
      stockName: new FormControl(""),
      userId: new FormControl("")
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

  tickers: String[] = []
  tickerDescs = new Map<String, String>();
  ngOnInit(){
  this.dataService.getTickers().subscribe({
    next: data => {
      this.tickers = data.map((stockTicker)=>stockTicker.symbol)
      data.forEach(stock=>{
        this.tickerDescs.set(stock.symbol, stock.description);
      })
    },
    error: error => console.log(error)
  })
  }

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
    this.orderForm.value.stockName??"",
    this.tickerDescs,
    this.orderForm.value.userId??"",
    )

  }
};
