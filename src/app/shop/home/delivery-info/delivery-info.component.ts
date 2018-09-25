import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery:any;
declare const jQuery:any;
declare const $ :any;

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})
export class DeliveryInfoComponent implements OnInit, AfterViewInit { 

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#testi").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 1],
        [768, 1]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: false,
      pagination: true
    });
  }
}
