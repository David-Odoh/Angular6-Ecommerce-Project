import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit, AfterViewInit {
  loading;

  constructor(public router: Router) { this.loading = true; }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() =>
      this.loading = false,
      300);
  }
}
