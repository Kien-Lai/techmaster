import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProductsListComponent, ProductCreateComponent],
  imports: [CommonModule, ProductsRoutingModule, FormsModule, ReactiveFormsModule]
})
export class ProductsModule {}
