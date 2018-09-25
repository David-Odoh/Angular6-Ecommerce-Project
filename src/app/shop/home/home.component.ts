import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery: any;
declare const jQuery: any;
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public router: Router) {
  }

  ngOnInit() { }

  ngAfterViewInit() {
    // this.ngOnInit();
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

  loadScripts() {
    const dynamicScripts = [
      'assets/catalog/view/javascript/jquery/jquery-2.1.1.min.js',
      'assets/catalog/view/javascript/bootstrap/js/bootstrap.min.js',
      'assets/catalog/view/javascript/webiarch/product-slider-zoom/jquery.elevatezoom.js',
      'assets/catalog/view/javascript/jquery/swiper/js/swiper.jquery.js',
      'assets/catalog/view/javascript/jquery/swiper/js/owl.carousel.min.js',
      'assets/catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js',
      'assets/catalog/view/javascript/jquery/webiquickview.js',
      'assets/catalog/view/javascript/jquery/webinewsletter.js',
      'assets/catalog/view/javascript/common.js'
    ];

    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
