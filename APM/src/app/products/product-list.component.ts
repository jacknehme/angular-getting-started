import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-product',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    filterProducts: IProduct[];
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    message: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = [{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }];

    constructor() {
        this.filterProducts = this.products;
        this.listFilter = 'cart';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        let arrProd = this.products.filter((product: IProduct) => {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
        return arrProd;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}
