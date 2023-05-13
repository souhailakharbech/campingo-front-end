import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { error, log } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { Products } from '../products/components/products';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../Model/file-handle';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
  
})

export class AddProductComponent implements OnInit {
  isNewProduct = true;
  // product: Products = new Products();
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
  array: FileHandle[] = [];
  
  submitted = false;
  constructor(private service: ProductsService, private sanitizer: DomSanitizer ,private router: Router,
    private activatedRoute: ActivatedRoute) { }
  // onAddProduct() {
  //   this.router.navigate(['/all-products']);
  // }

  ngOnInit(): void{
    // this.product = this.activatedRoute.snapshot.data['product'];
    if(this.product && this.product.idTools){
      this.isNewProduct = false;
    }
  }
  addProduct(productForm: any) {
    const productFormData = this.prepareFormData(this.product);
    this.product.toolsImages = this.array;
    this.service.addProduct(productFormData).subscribe(
      (product: Products) => {
        console.log('tools added successfully', product);
        // Reset the form
        this.product = new Products();
        this.array = [];
        Swal.fire({
          title: 'Product added!',
          text: 'Your product has been added successfully.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      },
      (error) => {
        console.error('Failed to add tools', error);
        this.array = [];
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add the product.',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      }
    );
  }
  
  
  // addProduct(productForm: any) {
  //   const productFormData = this.prepareFormData(this.product);
  //   this.product.toolsImages = this.array;
  //   this.service.addProduct(productFormData).subscribe(
  //       (product: Products) => {
  //         console.log('tools added successfully', product);
  //         // Reset the form
  //         this.product = new Products();
  //       },
  //       (error) => {
  //         console.error('Failed to add tools', error);
  //       }
  //   );
  //   this.array = [];
  // }
  
  prepareFormData(product: Products): FormData{
    const formData = new FormData();

    formData.append(
      'tools',
      new Blob([JSON.stringify(product)],{type: 'application/json'})
    );

    for(var i=0; i< product.toolsImages.length; i++){
      formData.append(
        'imageFile',
        product.toolsImages[i].file,
        product.toolsImages[i].file.name
      );
    }
    return formData;
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
  
}
  //onFileSelected(event:any) {}
  // product ={
  //   idTools:"",
  //   brand:"",
  //   category:"",
  //   description:"",
  //   priceperUnit:"",
  //   promotion:"",
  //   type:"",
  //   weight:"",
  //   gender:"",
  //   quantity:"",
  //  state:"",
  //  images: [],}
 
  // };
  // addProduct(productForm: NgForm){
  //   this.product.idTools = '';
  //   const productFormData = this.prepareFormData(this.product);
  //   this.service.addProduct(productFormData).subscribe(
  //     (response: any)=>{
  //      productForm.reset();
  //      //console.log(response);
  //     },
  //     (error: HttpErrorResponse)=>{
  //      console.log(error);
  //     }
  //    );
  // }

//   onSubmit(): void {
//     const data = {
//      brand: this.product.brand,
//      category: this.product.category
     
//    };
// this.service.addProduct(data).subscribe(
//  response => {
//     console.log(response);
//    this.submitted = true;
//    this.router.navigate(['/all-products']); // navigate to the proposals page

//  },
//   error => {
//    console.log(error);
//  });
 
  
//}
//newProduct(): void {
//this.submitted = false;
//this.product = {
  //brand: '',
  //category: ''
  
//};
  //}
  
     

