
import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse ,HttpParams} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Order } from "../domain/Order";



@Injectable({
  providedIn: 'root'
})


export class APIService {
  remoteURL:string = "http://localhost:8080"

// TODO 1 inject the HttpClient
constructor(private http: HttpClient) {
}

 // TODO 2 implement getShippers with handleError helper method
getOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(`${this.remoteURL}/api/order`)
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

submitOrderCreate(stockTickerLabel: string, stockPrice: number, stockVolume: number, buyOrSell: string){
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
    tradeOrderId: "",
    buyOrSell: buyOrSell,
    stockStatusCode: "PENDING",
    createdOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)  ,
    updatedOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    userId: "1",
  } 

  this.http.post<Order>(`${this.remoteURL}/api/order`, order).subscribe({
    next: data => console.log(`Added new order`),
    error: error => console.log(error.statusText)
  })

}

// orderDetailsByID(id: number): Order | null{
//   let order: Order | null = null
//   this.http.get<Order>(`${this.remoteURL}/api/order/${id}`).subscribe(
//     {
//       next: data => {
//         console.log(data)
//         order = data;
//       },
//       error: error => console.log(error),
//     }
//   )
  
//   return order
// }





deleteOrder(tradeOrderId:string){
  let queryParams = new HttpParams();
  queryParams = queryParams.append("tradeOrderId",tradeOrderId);
  this.http.delete("http://localhost:8080/api/order", ).subscribe({
    next: none => console.log(`Deleted order`),
    error: error => console.log(error.statusText)
  })
}


orderDetailsByID(id: string){
  return this.http.get<Order>(`${this.remoteURL}/api/order/${id}`)
}


submitOrderModify(id: string, stockTickerLabel: string, stockPrice: number, stockVolume: number, buyOrSell: string){
  let order:Order = {
    tradeOrderId: id,
    stockTickerLabel: stockTickerLabel, 
    stockPrice: stockPrice, 
    stockVolume: stockVolume,
    buyOrSell: "BUY",
    stockStatusCode: "PENDING",
    createdOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)  ,
    updatedOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    userId: "1",
  }
  console.log(id)

  return this.http.put<Order>(`${this.remoteURL}/api/order`, order).subscribe({
    next: data => console.log(`Updated order`),
    error: error => console.log(error.statusText)
  })
}
}
