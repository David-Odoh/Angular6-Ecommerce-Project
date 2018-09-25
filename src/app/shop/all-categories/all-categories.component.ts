import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const jquery:any;
declare const jQuery:any;
declare const $ :any;


@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.headermenu();
  }

  headermenu() {
    if (jQuery(window).width() < 768) {
      jQuery('ul.nav li.dropdown a.header-menu').attr("data-toggle", "dropdown");
    }
    else {
      jQuery('ul.nav li.dropdown a.header-menu').attr("data-toggle", "");
    }
  }
}
