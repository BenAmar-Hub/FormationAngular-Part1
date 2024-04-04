import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products:Array<any>=[];
  constructor(private http:HttpClient){
  }
// desque le rendu est générer la premiere methode qui s'execute est ngOnInit'
  ngOnInit() {
  this.getProducts();
  }

  /*  products:Array<any>=[
      {id:1,name:"Computer",price:1200,checked: false},
      {id:2,name:"Printer",price:3000,checked: true},
      {id:3,name:"Phone",price:4500,checked: false}
    ]*/
  getProducts(){
    this.http.get<Array<any>>("http://localhost:8085/products")
      .subscribe({
        next: data => {
          this.products=data
        },
        error: err => {
          console.log(err)
        }
      })
  }
  handleCheckProduct(product: any) {
    console.log(product.id)
    /*this.http.patch("http://localhost:8085/products"+product.id,
      {checked:!product.checked})*/
    //utiliser template string pour profiter de $ pour une bonne pratique
    this.http.patch<any>(`http://localhost:8085/products/${product.id}`,{checked:!product.checked})
      .subscribe({
        // si tout ce passe bien il me retourne le produit modifier
        next: updatedProduct =>{
          product.checked=!product.checked
          //this.getProducts();
        }
      })

  }
}
