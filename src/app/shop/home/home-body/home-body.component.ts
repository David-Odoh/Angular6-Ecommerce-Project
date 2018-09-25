import { CategoriesService } from './../../../services/categories.service';
import { Product } from './../../../models/product';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Category } from '../../../models/category';
declare const jquery: any;
declare const jQuery: any;
declare const $: any;

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit, AfterViewInit {
  products: Product[];
  gadgets: any[];
  filterBy: string;
  searchText: string;
  bestRatedFilter: number;
  topCats: any[];

  constructor(public productService: ProductService, public catService: CategoriesService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        console.log(products);
        this.productService.setAllProducts(products);
        this.products = this.productService.getAllProducts();
      },
      err => console.log(err)
    );

    this.filterBy = this.productService.getFilter();
    this.searchText = this.productService.getSearchFilter();
    this.bestRatedFilter = this.productService.getBestRatedFilter();

    this.productService.filterTypeEmitter.subscribe(
      (filterValue: string) => {
        this.filterBy = filterValue;
      }
    );
    this.productService.searchEmitter.subscribe(
      (searchValue: string) => {
        this.searchText = searchValue;
      }
    );

    this.productService.bestRatedEmitter.subscribe(
      (besRatedValue: number) => {
        this.bestRatedFilter = besRatedValue;
      }
    );
    // TOP CATEGORIES
    this.productService.getTopCategories().subscribe(
      tpCats => { this.topCats = tpCats }
    );
    // GADGET SUB-CATEGORY
    this.catService.getGadgetSubCat().subscribe(
      gadgets => {
        console.log(`Category Name: ${gadgets.categoryName}`);
        console.log(`Gadgets: ${gadgets.subCat}`);
        this.gadgets = gadgets.subCat;
        // this.catService.setAllGadgetSubCat(gadgets.subCat);
        // this.gadgets = this.catService.getAllGadgetSubCat();
        // console.log(`Gadgets: ${this.gadgets}`);
      },
      err => console.log(err)
    );
  }

  setFilter(filterValue: string) {
    this.productService.setFilter(filterValue);
  }

  setBestRFilter(filterValue: number) {
    this.productService.setBestRatedFilter(filterValue);
  }

  resetFilters() {
    this.productService.setFilter('all');
    this.productService.searchFilter('');
  }

  ngAfterViewInit() {

    // New Arrival Tab View
    $("#new-arrival").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 2],
        [992, 3],
        [1200, 3],
        [1590, 4]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    // On Sale Tab View
    $("#latest").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 2],
        [992, 3],
        [1200, 3],
        [1590, 4]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    // On Sale Tab View
    $("#bestRated").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 2],
        [992, 3],
        [1200, 3],
        [1590, 4]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    // To Categories This Week 
    $("#bestseller").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 2],
        [992, 3],
        [1200, 3],
        [1590, 4]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    //  Gadgets & Mobile Accessories 
    $(".tab-content .tab-pane #cattab").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 1],
        [768, 1],
        [992, 2],
        [1200, 2],
        [1590, 3]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });

    // Recently View Products
    $("#special").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 1],
        [992, 2],
        [1200, 2],
        [1590, 3]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });
  }

  // productsMethod(n: number, startFrom: number): number[] {
  //   return Array.from(Array(n).keys());
  // }
}