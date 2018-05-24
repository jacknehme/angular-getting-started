import { NgModule, Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    filterProducts: IProduct[];
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    message: string;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[];

    constructor(private _productService: ProductService) {
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        const arrProd = this.products.filter((product: IProduct) => {
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
        this._productService.getProducts()
                            .subscribe(
                                products => {
                                    this.products = products;
                                    this.filterProducts = this.products;
                                },
                                error => this.errorMessage = <any>error
                            );
    }
}
