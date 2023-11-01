import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent {

  protected products: Object|any;

  constructor(private apiService: ApiService){

    this.getProducts();

  }

  getProducts(): void {
    const requestGet = this.apiService.produtosAll();

    requestGet.subscribe({
      next: (response) =>{

          this.products = response;

          console.log(this.products)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }




}
