import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
