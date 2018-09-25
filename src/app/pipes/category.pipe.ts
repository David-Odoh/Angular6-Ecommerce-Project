import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(products: Product[], category: string): any {
    if (category) {
      return products.filter(product => {
        return product.category.categoryName === category;
      });
    }
  }
}
