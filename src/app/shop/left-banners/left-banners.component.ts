import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery:any;
declare const jQuery:any;
declare const $ :any;

@Component({
  selector: 'app-left-banners',
  templateUrl: './left-banners.component.html',
  styleUrls: ['./left-banners.component.css']
})
export class LeftBannersComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit () {
    $("#onsale").owlCarousel({
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

    $("#carousel0").owlCarousel({
      itemsCustom: [
        [0, 2],
        [600, 2],
        [768, 2],
        [992, 2],
        [1200, 2],
        [1410, 2]
      ],
      autoPlay: false,
      loop: false,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: true,
      pagination: false
    });
  }

}
