import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
// import { Shipper } from "../domain/Shipper";


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrls: ['./apiservice.component.css']
})
export class APIServiceComponent {

// TODO 1 inject the HttpClient
constructor(private http: HttpClient) {
}

 // TODO 2 implement getShippers with handleError helper method
getShippers(): Observable<Shipper[]> {
  return this.http.get<Shipper[]>("/api/shippers")
    .pipe(
      retry(3),
      catchError(this.handleError),
    );
}

private handleError(error: HttpErrorResponse) {
  console.error("An error occurred:", error.error);
  return throwError(() => new Error("Please try again later."));
}


}
