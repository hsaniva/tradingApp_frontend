import { Component } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent {
  constructor(private dataService: APIService) {}
  portfolioData : Object = new Object;
  ngOnInit(): void {
    console.log("Fetching user portfolio");
    this.fetchPortfolio();
  }

  fetchPortfolio(): void {
    this.dataService.getUserPortfolio().subscribe({
      next: (data) => {this.portfolioData = data,console.log(data)},
      error: (error) => console.error('Error occurred ' + error),
    })
  }
}
