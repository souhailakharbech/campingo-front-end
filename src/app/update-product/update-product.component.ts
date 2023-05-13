import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../products/components/products';
import Swal from 'sweetalert2';
import { FormBuilder,Validators } from '@angular/forms';
import { FileHandle } from '../Model/file-handle';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
    idTools:any;
    brand:any;
    category:any;
    description:any;
    priceperUnit:any;
    promotion:any;
    type:any;
    quantity:any;
   toolsImages: FileHandle[] = [];
   id:any
product!:Products;
    sanitizer: any;
    array: any;
  constructor(private service:ProductsService, private route:ActivatedRoute,
    private router:Router, private fb: FormBuilder ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params:any) => {
          this.id = +params.get('id');
          this.service.getProductDetailsById(this.id).subscribe((post:any) => {
            this.product = post;
            console.log(this.product)
          });
        });
      }
    
      updateproduct(product:Products) {
        console.log(this.product)
        this.service.updateProduct(this.id, this.product)
          .subscribe(
            updatedUser => {
              console.error('bara jawk behi');
              this.router.navigate(['/all-products']);
            },
            error => {
              console.error(error);
            }
          );
      }
      onFileSelected(event:any){
        if(event.target.files){
         const file = event.target.files[0];
    
         const fileHandle: FileHandle = {
           file: file,
           url: this.sanitizer.bypassSecurityTrustUrl(
             window.URL.createObjectURL(file)
           )
         };  
         this.array.push(fileHandle);
         this.product.toolsImages = this.array;
         console.log(this.product.toolsImages);
        }
      }
    
//   ngOnInit(): void {
//     this.getProd()
//   }
//   getProd(): void {
//     this.service.getProductsList()
//       .subscribe(res => this.products = res);
// }

// getProduc(idTools: any):void{
//   this.service.getProdbyId(idTools).subscribe(
//     data => {this.product = data;
//     },
//     error=>{console.log(error)}
   
//   )
// }


// getById(prod:any){
//   this.product = prod;
// }
 
    
  
    
//   editProduct(product: any): void {
//     this.service.updateProduct(product.idTools, product)
//       .subscribe(
//         response => {
//           console.log(response);
//           Swal.fire({
//             title: 'Do you want to save the changes?',
//             showDenyButton: true,
//             showCancelButton: true,
//             confirmButtonText: 'Save',
//             denyButtonText: `Don't save `,
//           }).then((result) => {
//             if (result.isConfirmed) {
//               this.submitted = true;
//               this.service.updateProduct(product.idTools, product)
//                 .subscribe(
//                   response => {
//                     console.log(response);
//                     Swal.fire('Success!', '', 'success');
//                     this.router.navigate(['/product']);
//                     window.location.reload() 
//                   },
//                   error => {
//                     console.log(error);
//                   });
//             } else if (result.isDenied) {
//               Swal.fire('Changes are not saved', '', 'info');
//             }
//           });
//         },
//         error => {
//           console.log(error);
//         }
//       );
//   }
//   backToTheList(){

//     this.router.navigate(["/pages/partenaire/list"])

//   }

}

