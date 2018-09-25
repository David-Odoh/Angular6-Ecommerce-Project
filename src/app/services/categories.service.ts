import { CachingService } from './caching.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from './../models/category';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends CachingService {

  categoryfilterTypeEmitter = new EventEmitter<string>(); // emit when filtering through product categories
  gadgetfilterTypeEmitter = new EventEmitter<string>(); // emit when filtering through product categories

  private allCategories : Category[];
  private allGadgets : any[];
  private filterBy = 'all';

  constructor(public http: HttpClient) {
    super();
   }

  // MAIN CATEGORIES
  setAllCategories(fetchedCategories: any[]) {
    this.allCategories = fetchedCategories;
  }

  getAllCategories() {
    return this.allCategories.slice();
  }

  getCategories(): Observable<any> {
    return this.http.get('../../assets/data/products.json');
  }

  setCatFilter(filterValue: string) {
    this.filterBy = filterValue;
    this.categoryfilterTypeEmitter.emit(this.filterBy);
  }

  getCatFilter() {
    return this.filterBy;
  }
  // ---/END MAIN CATEGORIES

  // GADGETS SUB-CATEGORIES
  
  setAllGadgetSubCat(fetchedGadgets: any[]) {
    this.allGadgets = fetchedGadgets;
  }

  getAllGadgetSubCat() {
    return this.allGadgets.slice();
  }

  getGadgetSubCat(): Observable<any> {
    return this.http.get('../../assets/data/gadgets.json');
  }

  setGadgetFilter(filterValue: string) {
    this.filterBy = filterValue;
    this.gadgetfilterTypeEmitter.emit(this.filterBy);
  }

  getGadgetFilter() {
    return this.filterBy;
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