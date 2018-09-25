import { Product } from './../models/product';
import { CachingService } from './caching.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CachingService {

  cartAdditionEmitter = new EventEmitter<Product[]>(); // emit for card and single product, minicart listens to it
  cartTotalEmitter = new EventEmitter<number>(); // emit for price total calculation on, addition, substraction, increase or removal
  filterTypeEmitter = new EventEmitter<string>(); // emit when filtering through product categories
  bestRatedEmitter = new EventEmitter<number>(); //emit when filtering through 5 star rated products
  searchEmitter = new EventEmitter<string>();
  layoutModeEmitter = new EventEmitter<boolean>();

  private allProducts: Product[];
  private cartAddedProducts: Product[] = [];
  private cartTotal = 0;
  private selectedProduct: Product;
  private filterBy = 'all';
  private bestRated = 5;
  private search = '';

  BASE_URL = 'http://54.183.87.149:3000/v1';


  public constructor(private http: HttpClient) {
    super();
  }

  setAllProducts(fetchedProducts: any[]) {
    this.allProducts = fetchedProducts;
  }

  getAllProducts() {
    return this.allProducts.slice();
  }

  getProducts(): Observable<any> {
    return this.http.get('../../assets/data/products.json');
  }

  setFilter(filterValue: string) {
    this.filterBy = filterValue;
    this.filterTypeEmitter.emit(this.filterBy);
  }

  getFilter() {
    return this.filterBy;
  }

  setBestRatedFilter(filterValue: number) {
    this.bestRated = filterValue;
    this.bestRatedEmitter.emit(this.bestRated);
  }

  getBestRatedFilter() {
    return this.bestRated;
  }

  searchFilter(searchValue: string) {
    this.search = searchValue;
    this.searchEmitter.emit(this.search);
  }

  getSearchFilter() {
    return this.search;
  }

  // get max 3 similar products sorted from high price > low
  // getSimilarProducts(prodType: string, prodId: string) {
  //   const SIMILAR_PRODUCTS = this.getAllProducts().sort((a, b) => b.price - a.price);
  //   return SIMILAR_PRODUCTS.filter((p) => {
  //     return p.id !== prodId && p.type === prodType;
  //   }).slice(0, 3); // get max 3 items
  // }

  // TOP CATEGOTIES *******//
  // GET ALL
  getTopCategories(): Observable<any> {
    return this.http.get('../../assets/data/top-categories.json');
  }

  // HANDLE ALL ERRORS
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Server returned code ${error.status}, ` +
        `body was: ${error.error}`);
      if (error.status == 404) {
        return throwError('User Not Found!');
      }
    }
    return throwError('Oops, unable to complete! please try again later.');
  }
}
