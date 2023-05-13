import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Products } from '../components/products';
import { Observable, map, of } from 'rxjs';
import { get } from 'http';
import { FileHandle } from 'src/app/Model/file-handle';
import { ProductsService } from './products.service';
import { ImageProcessingService } from 'src/app/show-product-images-dialog/image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Products> {

  constructor(private service:ProductsService, private imageProcessingService: ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Products> {
    const id = route.paramMap.get("idTools");
    if(id){
      return this.service.getProductDetailsById(id)
      .pipe(
        map(p => this.imageProcessingService.createImages(p))
      );
    }else {
      return of(this.getProductDetails());

    }
     
  }
  getProductDetails(){
    return {
      idTools: null,
          brand:"",
          category:"",
          description:"",
          priceperUnit:"",
          promotion:"",
          type:"",
          quantity:"",
         toolsImages: [],
  
    };
  }
}
