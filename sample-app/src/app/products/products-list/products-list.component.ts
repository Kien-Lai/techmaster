import { Component, OnInit } from "@angular/core";
import { ProductControllerService } from "src/swagger";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
  providers: [ProductControllerService]
})
export class ProductsListComponent implements OnInit {
  products = [];

  constructor(private productService: ProductControllerService) {}

  ngOnInit() {
    this.productService.getAllProductsUsingGET().subscribe(res => {
      this.products = res;
    });
  }
}
