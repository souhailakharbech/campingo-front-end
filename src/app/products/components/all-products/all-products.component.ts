import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../products';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from 'src/app/show-product-images-dialog/show-product-images-dialog.component';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from 'src/app/show-product-images-dialog/image-processing.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  

  products: Products []=[];
  product: any = null;
  submitted = false;
  idTools: number = 0;
  prod = new Products();
data:any
listProd:any
retour:any
  constructor(private service:ProductsService, private route: ActivatedRoute, private router: Router, 
    public imagesDialog: MatDialog , private imageProcessingService: ImageProcessingService) { }

  ngOnInit(): void {
    this.getProd()
    this.data=this.route.snapshot.params['data'];
    if(this.route.snapshot.params['data']==null){
      this.getProd();
      this.retour="";
    }else{

    this.searchProduct();
    this.retour="Retour";
    }
  }
  getProd(): void {
    this.service.getProductsList()
    .pipe(
      map((x: Products[], i)=> x.map((product: Products) => this.imageProcessingService.createImages(product)))
    )
      .subscribe(res => this.products = res);
}



// deleteProd(idTools: any) {
//   this.service.deleteProduct(idTools).subscribe(res => {
//     this.getProd();
//   }
//   );
// }
deleteProd(idTools: any) {
  Swal.fire({
    title: 'Are you sure you want to delete this product?',
    text: 'You will not be able to recover this product!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.deleteProduct(idTools).subscribe(res => {
        this.getProd();
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        );
      });
    }
  });

}


// getProduc(idTools: any):void{
//   this.service.getProdbyId(idTools).subscribe(
//     data => {this.product = data;
//     },
//     error=>{console.log(error)}
   
//   );
// }



getById(prod:any){
  this.product = prod;
}

// updateProduct(product: any): void {
//   this.service.updateProduct(product.idTools, product)
//     .subscribe(
//       response => {
//         console.log(response);
//         Swal.fire({
//           title: 'Do you want to save the changes?',
//           showDenyButton: true,
//           showCancelButton: true,
//           confirmButtonText: 'Save',
//           denyButtonText: `Don't save `,
//         }).then((result) => {
//           if (result.isConfirmed) {
//             this.submitted = true;
//             this.service.updateProduct(product.idTools, product)
//               .subscribe(
//                 response => {
//                   console.log(response);
//                   Swal.fire('Success!', '', 'success');
//                   this.router.navigate(['/product']);
//                   window.location.reload() 
//                 },
//                 error => {
//                   console.log(error);
//                 });
//           } else if (result.isDenied) {
//             Swal.fire('Changes are not saved', '', 'info');
//           }
//         });
//       },
//       error => {
//         console.log(error);
//       }
//     );
// }

showImages(product: Products){
  console.log(product);
  this.imagesDialog.open(ShowProductImagesDialogComponent, {
    data:{
        images: product.toolsImages
    },
    height: '400px',
    width: '600px'
  });
}
editProductDetails(idTools: any){
  console.log(idTools);
  this.router.navigate(['/add-products', {idTools: idTools}]);
}

searchProduct(){
  this.service.searchProd(this.data).subscribe(res=>{
    this.product=res;
    console.log(this.listProd)
  })
}
i:any;
j:any;
ch:any;
test(chaine:any){
  this.ch=JSON.stringify(chaine.keyword);
  this.i=this.ch.replace('"',"");
  this.j=this.i.replace('"',"");
  this.router.navigate(['/all-products/'+this.j])
}


}