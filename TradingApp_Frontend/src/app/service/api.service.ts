
import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse ,HttpParams} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Order } from "../domain/Order";
import { StockSymbol, StockSymbolPrice } from "../domain/StockSymbolPrice";
import { CloseScrollStrategy } from "@angular/cdk/overlay";



@Injectable({
  providedIn: 'root'
})


export class APIService {
  remoteURL:string = "http://localhost:8080"
  popularStocks:StockSymbolPrice[] | undefined


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

// http://localhost:8080/api/market/symbol/

tickers = ["META",  "APPL",  "NFLX",  "GOOG", "GOOGL", "UBER"]
  
getTickers(){
  // For now Ticker list is pulled from here/ later on pull it from backend.
  return this.http.get<StockSymbol[]>(`${this.remoteURL}/api/market/symbol/`)
  .pipe(
    retry(3),
    catchError(this.handleError)
  )
}

submitOrderCreate(stockTickerLabel: string, stockPrice: number, stockVolume: number, buyOrSell: string, stockName: string, myMap: Map<String, String>, userId: string){
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
    createdOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    updatedOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    userId: "df088d94-8fd5-44aa-94de-c2c3d937a38b",
    stockName: myMap.get(stockTickerLabel)
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
  this.http.delete(`${this.remoteURL}/api/order`, ).subscribe({
    next: none => console.log(`Deleted order`),
    error: error => console.log(error.statusText)
  })
}


orderDetailsByID(id: string){
  return this.http.get<Order>(`${this.remoteURL}/api/order/${id}`)
}


submitOrderModify(id: string, stockTickerLabel: string, stockPrice: number, stockVolume: number, buyOrSell: string, userId:string){
  let order:Order = {
    tradeOrderId: id,
    stockTickerLabel: stockTickerLabel, 
    stockPrice: stockPrice, 
    stockVolume: stockVolume,
    buyOrSell: "BUY",
    stockStatusCode: "PENDING",
    createdOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    updatedOn: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
    userId: "df088d94-8fd5-44aa-94de-c2c3d937a38b",
    stockName:""
  }

  console.log(order);

  return this.http.put<Order>(`${this.remoteURL}/api/order`, order).subscribe({
    next: data => console.log(`Updated order`),
    error: error => console.log(error.statusText)
  })


}

getPopularStocks(): Observable<StockSymbolPrice[]>{
  return this.http.get<StockSymbolPrice[]>(`${this.remoteURL}/api/market/popular`)
  .pipe(
    retry(3),
    catchError(this.handleError),
  );
}

// http://localhost:8080/api/market/symbol/

  getUserPortfolio(): Observable<Object>{
    return this.http.get(`${this.remoteURL}/api/user/portfolio?userId=df088d94-8fd5-44aa-94de-c2c3d937a38b`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
}
