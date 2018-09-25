import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {
  loading;

  constructor(public router: Router) { this.loading = true; }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() =>
      this.loading = false,
      1000);
  }
}
