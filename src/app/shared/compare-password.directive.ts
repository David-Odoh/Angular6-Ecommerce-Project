import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';
import { Attribute } from '@angular/core';

@Directive({
  selector: '[appComparePassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ComparePasswordDirective, multi: true }]
})
export class ComparePasswordDirective implements Validators {

  constructor( @Attribute('appComparePassword') public comparer: string) { }


}
