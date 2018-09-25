import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery:any;
declare const jQuery:any;
declare const $ :any;

@Component({
  selector: 'app-flash-deals',
  templateUrl: './flash-deals.component.html',
  styleUrls: ['./flash-deals.component.css']
})
export class FlashDealsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#deal").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 2],
        [768, 1],
        [992, 1],
        [1200, 1]
      ],
      // autoPlay: 1000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });
  }

}
