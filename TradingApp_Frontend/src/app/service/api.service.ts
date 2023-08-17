
import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Order } from "../domain/Order";



@Injectable({
  providedIn: 'root'
})


export class APIService {

// TODO 1 inject the HttpClient
constructor(private http: HttpClient) {
}

 // TODO 2 implement getShippers with handleError helper method
getOrders(): Observable<Order[]> {
  return this.http.get<Order[]>("http://localhost:8080/api/order")
    .pipe(
      retry(3),
      catchError(this.handleError),
    );
}

private handleError(error: HttpErrorResponse) {
  console.error("An error occurred:", error.error);
  return throwError(() => new Error("Please try again later."));
}

tickers = ["META",  "APPL",  "NFLX",  "GOOG", "GOOGL", "UBER"]
  
getTickers(){
  // For now Ticker list is pulled from here/ later on pull it from backend.
  return this.tickers;
}

submitOrderCreate(stockTickerLabel: string, stockPrice: number, stockVolume: number, buyOrSell: number){
  /*
  THis function is called with the following parameters

  this.orderForm.value.stockTickerLabel ?? '',
  this.orderForm.value.stockPrice?? 0,
  this.orderForm.value.stockVolume?? 0,
  this.orderForm.value.buyOrSell?? 0,

  */

  let order:Order = {
    stockTickerLabel: stockTickerLabel, 
    stockPrice: stockPrice, 
    stockVolume: stockVolume,
    tradeOrderId: 0,
    buyOrSell: "",
    stockStatusCode: ""
  } 

  this.http.post<Order>("http://localhost:8080/api/order", order).subscribe({
    next: data => console.log(`Added new order`),
    error: error => console.log(error.statusText)
  })

}

submitOrderModify(){

}

}
