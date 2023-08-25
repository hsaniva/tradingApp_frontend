import { Component } from '@angular/core';
import { APIService } from '../service/api.service';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { Portfolio, StockInfo } from '../domain/Portfolio';
import { CanvasJS, CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatButtonToggleModule, MatFormFieldModule,  MaterialModule, CanvasJSAngularChartsModule],
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent {
  constructor(private dataService: APIService) {}
  portfolioData: Portfolio = <Portfolio>{};
  ngOnInit(): void {
    console.log("Fetching user portfolio");
    this.fetchPortfolio();
  }

  fetchPortfolio(): void {
    this.dataService.getUserPortfolio().subscribe({
      next: (data) => {
        this.portfolioData = data, 
        console.log(this.portfolioData),
        setChartData(this.portfolioData)
      },
      error: (error) => console.error('Error occurred ' + error),
    })
  }
}
function setChartData(this: any, portfolioData: Portfolio) {
  const holdingDataPts:{ y: number; indexLabel: string; }[] = []
  const holdingDataPtsPriceWise:{ y: number; indexLabel: string; }[] = []

  portfolioData.holdings.forEach(element => {
    const newEntry = {y:element.stockVolume, indexLabel:element.stockTickerLabel}
    const newEntry2 = {y:element.stockPrice, indexLabel:element.stockTickerLabel}
    holdingDataPts.push(newEntry);
    holdingDataPtsPriceWise.push(newEntry2);
  });
  createChart(holdingDataPts)
  createChartPriceWise(holdingDataPtsPriceWise);
  console.log(this.holdingDataPts);
}

function createChart(holdingDataPts: { y: number; indexLabel: string; }[]) {
  var chart = new CanvasJS.Chart("chartContainer",
    {
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      data: [
      {
        startAngle: 45,
       indexLabelFontSize: 20,
       indexLabelFontFamily: "Garamond",
       indexLabelFontColor: "darkgrey",
       indexLabelLineColor: "darkgrey",
       indexLabelPlacement: "outside",
       type: "doughnut",
       showInLegend: true,
       dataPoints: holdingDataPts
     }
     ]
   });

    chart.render();
}

function createChartPriceWise(holdingDataPtsPriceWise: { y: number; indexLabel: string; }[]) {
  var chart = new CanvasJS.Chart("chartContainer2",
	{
				
		data: [
		{       
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#,##0,,.## Million",
			legendText: "{indexLabel}",
			dataPoints: holdingDataPtsPriceWise
		}
		]
	});
	chart.render();
}

