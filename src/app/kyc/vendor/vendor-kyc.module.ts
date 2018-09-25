import { AuthGuard } from './../../services/auth.guard';
import { VendorBankComponent } from './vendor-bank/vendor-bank.component';
import { PhoneVerificationComponent, RegisterSuccessDialog } from './phone-verification/phone-verification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatIconModule, MatDialogModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'vendor-phone', component: PhoneVerificationComponent },
  { path: 'vendor-bank', component: VendorBankComponent },
]

@NgModule({
  imports: [
    CommonModule,
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
  ],
  declarations: [
    PhoneVerificationComponent,
    VendorBankComponent,
    RegisterSuccessDialog
  ],
  entryComponents: [RegisterSuccessDialog],
  exports: [
    PhoneVerificationComponent,
    VendorBankComponent,
  ],
  providers: []
})
export class VendorKycModule { }
