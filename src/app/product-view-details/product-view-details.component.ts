import { Component, OnInit } from '@angular/core';
import { Products } from '../products/components/products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/services/products.service';
import { error } from 'console';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit {
  selectedProductIndex = 0;
// product: Products;
product: Products = {
  idTools: null,
  brand: "",
  category: "",
  description: "",
  priceperUnit: "",
  promotion: "",
  type: "",
  quantity: "",
  toolsImages: [],
};
  constructor(private activatedRoute: ActivatedRoute,
              private service: ProductsService ) { }

  ngOnInit(): void {
        this.product = this.activatedRoute.snapshot.data['product'];
        console.log(this.product)
  }
  addToCart(idTools: any){
    // console.log(idTools);
    this.service.addToCart(idTools).subscribe(
      (response)=>{
        console.log(response);
      }, (error)=>{
        console.log(error);
      }
    );

  }
  changeIndex(index: number){
    this.selectedProductIndex = index;

  }
}
