import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { Products } from '../products/components/products';
import { map } from 'rxjs';
import { ImageProcessingService } from '../show-product-images-dialog/image-processing.service';
import { Router } from '@angular/router';
import { type } from 'os';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  
  products: Products []=[];

  constructor(private service:ProductsService,private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
    
  }


  filterByPriceRange(minPrice: number, maxPrice: number): void {
    this.service.filterByPriceRange(minPrice, maxPrice)
      .subscribe(products => this.products = products);
  }

  public getAllProducts(){
    this.service.getProductsList()
    .pipe(
      map((x: Products[], i)=> x.map((product: Products) => this.imageProcessingService.createImages(product)))
    )
      .subscribe(res =>{
        console.log(res);
       this.products = res});
}

showProductDetails(idTools: any){
  this.router.navigate(['/productViewDetails', {idTools: idTools}])
}
  
}
