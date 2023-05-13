import { Injectable } from '@angular/core';
import { Products } from '../products/components/products';
import { FileHandle } from '../Model/file-handle';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }
  public createImages(product: Products){
    const prouctImages: any[] = product.toolsImages;

    const productImagesToFileHandle: FileHandle[] = [];

    for (let i=0; i< prouctImages.length; i++){
     const imageFileData = prouctImages[i];

     
     const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);

     
    const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
    const finalFileHandle : FileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };

    productImagesToFileHandle.push(finalFileHandle);
    }
    product.toolsImages= productImagesToFileHandle;
    return product;
  }

  public dataURItoBlob(picBytes: any, imageType: any){
      const byteString = window.atob(picBytes);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array = new Uint8Array(arrayBuffer);

      for(let i=0; i< byteString.length; i++){
          int8Array[i] = byteString.charCodeAt(i);
      }

      
     const blob =  new Blob([int8Array],{type: imageType});
      return blob;

  }
}
