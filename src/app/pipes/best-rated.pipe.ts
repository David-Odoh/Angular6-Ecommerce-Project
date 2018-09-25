import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestRated'
})
export class BestRatedPipe implements PipeTransform {
  transform(products: Product[], rating: number): any {
    if (!products) { return []; }
    else {
      return products.filter(product => {
        return product.rating == 5;
      });
    }
  }
}
