import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery:any;
declare const jQuery:any;
declare const $ :any;

@Component({
  selector: 'app-home-sliders',
  templateUrl: './home-sliders.component.html',
  styleUrls: ['./home-sliders.component.css']
})
export class HomeSlidersComponent implements OnInit, AfterViewInit { 

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#slideshow0").owlCarousel({
      itemsCustom: [
        [0, 1],
        [600, 1],
        [768, 1]
      ],
      autoPlay: 6000,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: false,
      pagination: true
    });
  }
}
