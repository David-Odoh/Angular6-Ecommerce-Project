import { CategoriesService } from './services/categories.service';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shop/navbar/navbar.component';
import { FooterComponent } from './shop/footer/footer.component';
import { CookieAlertComponent } from './shop/cookie-alert/cookie-alert.component';
import { MobileMenuComponent } from './shop/mobile-menu/mobile-menu.component';
import { AllCategoriesComponent } from './shop/all-categories/all-categories.component';
import { HomeComponent } from './shop/home/home.component';
import { FlashDealsComponent } from './shop/flash-deals/flash-deals.component';
import { LeftBannersComponent } from './shop/left-banners/left-banners.component';
import { HomeSlidersComponent } from './shop/home/home-sliders/home-sliders.component';
import { DeliveryInfoComponent } from './shop/home/delivery-info/delivery-info.component';
import { HomeBodyComponent } from './shop/home/home-body/home-body.component';
import { LoginComponent } from './kyc/login/login.component';
import { RegisterComponent, RegisterSuccessDialog } from './kyc/register/register.component';
import { ShopComponent } from './shop/shop.component';
import { KycComponent } from './kyc/kyc.component';
import { ForgotPasswordComponent } from './kyc/forgot-password/forgot-password.component';
import { OtpComponent, IntialSetupCompleteDialog } from './kyc/otp/otp.component';
import { DetailsPageComponent } from './shop/details-page/details-page.component';
import { CooperatorThankYouComponent } from './shop/cooperator-thank-you/cooperator-thank-you.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ShippingOptionsComponent } from './shop/checkout/shipping-options/shipping-options.component';
import { CooperativesComponent } from './shop/checkout/cooperatives/cooperatives.component';
import { TransactionHistoryComponent } from './shop/transaction-history/transaction-history.component';
import { MyOrdersComponent } from './shop/transaction-history/my-orders/my-orders.component';
import { TransactionTableComponent } from './shop/transaction-history/transaction-table/transaction-table.component';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorNavbarComponent } from './vendor/vendor-navbar/vendor-navbar.component';
import { VendorProfileComponent } from './vendor/account-settings/vendor-profile/vendor-profile.component';
import { Breadcrumb2Component } from './vendor/account-settings/breadcrumb2/breadcrumb2.component';
import { MakeSaleComponent } from './vendor/account-settings/make-sale/make-sale.component';
import { ChangePasswordComponent } from './vendor/account-settings/change-password/change-password.component';
import { ReportIssueComponent } from './vendor/account-settings/report-issue/report-issue.component';
import { AddressBookComponent } from './vendor/account-settings/address-book/address-book.component';
import { NewSeatComponent } from './vendor/account-settings/new-seat/new-seat.component';
import { AccountSettingsComponent } from './vendor/account-settings/account-settings.component';
import { ProductsComponent } from './vendor/products/products.component';
import { AddComponent } from './vendor/products/add/add.component';
import { ProductBreadcrumbComponent } from './vendor/products/product-breadcrumb/product-breadcrumb.component';
import { MyShopComponent } from './vendor/my-shop/my-shop.component';
import { ShopBreadcrumbComponent } from './vendor/my-shop/shop-breadcrumb/shop-breadcrumb.component';
import { MyTransactionHistoryComponent } from './vendor/my-transaction-history/my-transaction-history.component';
import { ThBreadcrumbComponent } from './vendor/my-transaction-history/th-breadcrumb/th-breadcrumb.component';
import { OutstandingComponent } from './vendor/my-transaction-history/outstanding/outstanding.component';
import { PendingComponent } from './vendor/my-transaction-history/pending/pending.component';
import { HistoryComponent } from './vendor/my-transaction-history/history/history.component';
import { ComparePasswordDirective } from './shared/compare-password.directive';
import { SetTransactionPinComponent } from './kyc/set-transaction-pin/set-transaction-pin.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VendorKycModule } from './kyc/vendor/vendor-kyc.module';
import { MimiCartComponent } from './shop/shopping-cart/mimi-cart/mimi-cart.component';
import { ProductCardComponent } from './shop/products/product-card/product-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BestRatedPipe } from './pipes/best-rated.pipe';
import { TopCatCardComponent } from './shop/products/top-cat-card/top-cat-card.component';
import { AccessoriesCardComponent } from './shop/products/accessories-card/accessories-card.component';
import { AccessoriesNavComponent } from './shop/products/accessories-card/accessories-nav/accessories-nav.component';
import { SubcatPipe } from './pipes/subcat.pipe';
import { CategoryPipe } from './pipes/category.pipe';


const appRoutes: Routes = [
  { path: '', redirectTo: '/kyc/login', pathMatch: 'full' },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'product-page', component: DetailsPageComponent },
      { path: 'cooperator-thank-you', component: CooperatorThankYouComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'checkout', component: CheckoutComponent },
      {
        path: 'history',
        component: TransactionHistoryComponent,
        children: [
          { path: '', component: TransactionTableComponent },
          { path: 'orders', component: MyOrdersComponent },
          { path: 'transactions', component: TransactionTableComponent }
        ]
      }
    ]
  },
  {
    path: 'kyc',
    component: KycComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'change-password', component: ForgotPasswordComponent },
      { path: 'otp', component: OtpComponent },
      { path: 'transaction-pin', component: SetTransactionPinComponent }
    ]
  },
  { path: 'otp-modal', component: OtpModalComponent },
  {
    path: 'vendor', component: VendorComponent,
    children: [
      { path: '', component: AccountSettingsComponent },
      {
        path: 'account-settings', component: AccountSettingsComponent,
        children: [
          { path: '', component: VendorProfileComponent },
          { path: 'profile', component: VendorProfileComponent },
          { path: 'make-sale', component: MakeSaleComponent },
          { path: 'change-password', component: ChangePasswordComponent },
          { path: 'report-issue', component: ReportIssueComponent },
          { path: 'address-book', component: AddressBookComponent },
          { path: 'new-seat', component: NewSeatComponent },
        ]
      },
      {
        path: 'products', component: ProductsComponent,
        children: [
          { path: '', component: AddComponent },
          { path: 'add', component: AddComponent }
        ]
      },
      { path: 'my-shop', component: MyShopComponent },
      { path: 'my-transaction-history', component: MyTransactionHistoryComponent },
    ]
  },
  { path: '**', redirectTo: '/shop', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CookieAlertComponent,
    MobileMenuComponent,
    AllCategoriesComponent,
    HomeComponent,
    FlashDealsComponent,
    LeftBannersComponent,
    HomeSlidersComponent,
    DeliveryInfoComponent,
    HomeBodyComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    KycComponent,
    ForgotPasswordComponent,
    OtpComponent,
    DetailsPageComponent,
    CooperatorThankYouComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ShippingOptionsComponent,
    CooperativesComponent,
    TransactionHistoryComponent,
    MyOrdersComponent,
    TransactionTableComponent,
    OtpModalComponent,
    VendorComponent,
    VendorNavbarComponent,
    VendorProfileComponent,
    Breadcrumb2Component,
    MakeSaleComponent,
    ChangePasswordComponent,
    ReportIssueComponent,
    AddressBookComponent,
    NewSeatComponent,
    AccountSettingsComponent,
    ProductsComponent,
    AddComponent,
    ProductBreadcrumbComponent,
    MyShopComponent,
    ShopBreadcrumbComponent,
    MyTransactionHistoryComponent,
    ThBreadcrumbComponent,
    OutstandingComponent,
    PendingComponent,
    HistoryComponent,
    RegisterSuccessDialog,
    ComparePasswordDirective,
    SetTransactionPinComponent,
    IntialSetupCompleteDialog,
    MimiCartComponent,
    ProductCardComponent,
    FilterPipe,
    SearchPipe,
    TruncatePipe,
    BestRatedPipe,
    TopCatCardComponent,
    AccessoriesCardComponent,
    AccessoriesNavComponent,
    SubcatPipe,
    CategoryPipe,
  ],
  entryComponents: [IntialSetupCompleteDialog, RegisterSuccessDialog],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    VendorKycModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [AuthService, ProductService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
