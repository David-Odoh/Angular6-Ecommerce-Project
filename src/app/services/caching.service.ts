import { Injectable } from '@angular/core';
import { Observable } from 'node_modules/rxjs';
import { share } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor() { }

  protected cache<T>(getter: () => Observable<T>,
                     setter: (val: Observable<T>) => void,
                     retreive: () => Observable<T>): Observable<T> {
    const cached = getter();
    if (cached !== undefined) {
      return cached;
    } else {
      const obj = retreive().pipe(share());
      setter(obj);
      return obj;
    }
  }
}
