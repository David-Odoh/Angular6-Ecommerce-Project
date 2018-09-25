import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], searchText: string): any[] {
    if (!products) { return []; }
    if (!searchText) { return products; }
    searchText = searchText.toLowerCase();
    return products.filter(prod => {
      // searches based on name || description
      return prod.productName.toLowerCase().includes(searchText) || prod.productBriefDesc.toLowerCase().includes(searchText);
    });
  }
}
