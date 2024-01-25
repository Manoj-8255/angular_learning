import { Component, OnInit } from '@angular/core';
import { RepoService } from '../services/RepoService.service';

interface Products {
  brand: string;
  category: string;
  price: number;
  title: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  public products: Products[] = [];
  public currentPage = 1;
  public limit = 10;
  constructor(private repoService: RepoService) {
  }

  ngOnInit() {
    this.fetchProducts(this.currentPage);
  }

  fetchProducts(page: number) {
    this.repoService.fetchAllProducts(page).subscribe((res) => {
      this.products = res.products as Products[];
    });
  }

  changePages(page: number): void {
    this.currentPage = page;
    this.fetchProducts(page);
  }
}
