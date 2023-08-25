import { Component } from '@angular/core';
import { APIService } from '../service/api.service';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { Portfolio, StockInfo } from '../domain/Portfolio';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatButtonToggleModule, MatFormFieldModule,  MaterialModule],
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
      next: (data) => {this.portfolioData = data, console.log(this.portfolioData)},
      error: (error) => console.error('Error occurred ' + error),
    })
  }
}
