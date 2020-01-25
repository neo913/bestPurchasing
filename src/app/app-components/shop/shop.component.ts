import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/app-model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  products: Product[];
  breakpoint;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
    this.products = new Array<Product>();
    this.setTestProducts();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }
  
  setTestProducts() {
    for(let i=0; i<50; i++) {
      this.createProduct(
        'Best Purchasing', 
        'Computer', 
        Math.floor(Math.random() * 10) + 0.99, 
        Math.floor(Math.random() * 100), (i % 5 - 1) * 10, 
        '', 
        '../../../assets/products/download' + (i % 5 + 1)  + '.jpg');
    }
  }
/**
 * 
 * @param name // Temporary removed for testing
 * @param brand 
 * @param category 
 * @param price 
 * @param stock 
 * @param offer 
 * @param description 
 * @param imgPath 
 */
  createProduct(brand: string, category: string, price: number, stock: number, offer: number, description: string, imgPath: string) {
    let product = new Product();
    product.setter('pID', this.pad(Math.floor(Math.random() * 100000000), 8));
    product.setter('name', "Test item " + product.getter('pID'));
    product.setter('brand', brand);
    product.setter('category', category);
    product.setter('price', price);
    product.setter('stock', stock);
    product.setter('offer', offer);
    product.setter('description', window.location.href + '/'+ product.getter('pID'));
    product.setter('imgPath', imgPath);
    this.products.push(product);
  }

  pad(num: number, size: number) {
    var str = num + "";
    while (str.length < size) str = "0" + str;
    return str;
  }

  openShare(text: string) {
    var el = document.createElement('textarea');
    el.value = text;
    // el.style = {position: 'absolute', left: '-9999px'};  // Unnecesssary
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    this._snackBar.open('URL is copied!', 'OK', {
      duration: 2000,
    });
  }
}
