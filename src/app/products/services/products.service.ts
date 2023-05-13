import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../components/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:8092/Campi/Tools/';
  constructor(private http:HttpClient) { }

  getProductsList() {
    return this.http.get<Products[]>("http://localhost:8092/Campi/Tools/ToolsList");
  }

  addProduct(product: FormData) {
    return this.http.post<Products>("http://localhost:8092/Campi/Tools/addTools", product);
  }

  deleteProduct(idTools: any) {
    return this.http.delete("http://localhost:8092/Campi/Tools/DeleteTools/"+idTools);
  }
  // updateProduct(idTools: any, product: Products){
  //   return this.http.put("http://localhost:8092/Campi/Tools/UpdateTools/"+idTools,product);
  // }
  updateProduct(idTools: any, product: Products): Observable<any>{
    return this.http.put(`http://localhost:8092/Campi/Tools/UpdateTools/${idTools}` ,product);
  }

  getProductDetailsById(idTools:any): Observable<Products>{
    return this.http.get<Products>("http://localhost:8092/Campi/Tools/Tools/" +idTools);

  }
  getProductByTypeAndBrand(type: string , brand: string ){
    return this.http.get<Products[]>("http://localhost:8092/Campi/Tools/filter?type"+type+"&brand="+brand);

  }
  addToCart(idTools: any){
    return this.http.get("http://localhost:8092/Campi/Cart/addToCart/"+idTools);
  }
  filterByPriceRange(minPrice: number, maxPrice: number): Observable<Products[]> {
    const url = `${this.baseUrl}/filterByPriceRange?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    return this.http.get<Products[]>(url);
  }
  searchProd(t:any){
    return this.http.get("http://localhost:8092/Campi/Tools/search/"+t);
  }
}
