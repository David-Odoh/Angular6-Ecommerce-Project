import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery:any;
declare const jQuery:any;
declare const $ :any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#newsletter_5b3f6107f0a24").webiNewsletter().work('Email is not valid!');

    $("#slideshow0").owlCarousel({
      itemsCustom: [
        [0, 1]
      ],
      autoPlay: 10000,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      loop: false,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      navigation: false,
      pagination: true
    });
  }
 

}
