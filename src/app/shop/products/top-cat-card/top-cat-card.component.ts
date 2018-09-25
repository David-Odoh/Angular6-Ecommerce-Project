import { ProductService } from './../../../services/product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-cat-card',
  templateUrl: './top-cat-card.component.html',
  styleUrls: ['./top-cat-card.component.css']
})
export class TopCatCardComponent implements OnInit {
  topCats = [];
  @Input() topCat;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    // this.productService.getTopCategories().subscribe(
    //   tpCats => { this.topCats = tpCats }
    // )
  }

}
