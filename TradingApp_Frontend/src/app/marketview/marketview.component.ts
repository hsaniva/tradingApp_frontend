import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APIService } from '../service/api.service';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from '../material/material.module';
import { StockSymbolPrice } from '../domain/StockSymbolPrice';


@Component({
  selector: 'app-marketview',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatButtonToggleModule, MatFormFieldModule,  MaterialModule],
  templateUrl: './marketview.component.html',
  styleUrls: ['./marketview.component.css']
})
export class MarketviewComponent{
  stockSymbolPriceList: StockSymbolPrice[] = []

  public constructor(private dataservice: APIService){

  }

  ngOnInit(): void {
    console.log("Init Market view")
    this.dataservice.getPopularStocks().subscribe({
      next : (data) => {
        this.stockSymbolPriceList = data
      },
      error: error => console.log(error)
    })
  }

  makeOrder(){
    
  }


}
