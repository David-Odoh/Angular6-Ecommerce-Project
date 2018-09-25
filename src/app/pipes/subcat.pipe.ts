import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subcat'
})
export class SubcatPipe implements PipeTransform {
  transform(products: Product[], subcat: string): any {
    if (subcat) {
      return products.filter(product => {
        return product.category.subcat.subcatName === subcat;
      });
    }
  }
}
