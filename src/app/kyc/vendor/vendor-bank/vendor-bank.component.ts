import { DataService } from './../../../services/data.service';
import { VendorService } from './../../../services/vendor.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-vendor-bank',
  templateUrl: './vendor-bank.component.html',
  styleUrls: ['./vendor-bank.component.css']
})
export class VendorBankComponent implements OnInit {
  accDetailForm;
  userId;
  vendorBanks: string[];

  constructor(
    public fb: FormBuilder, 
    public _authService: AuthService, 
    public _vendorService: VendorService, 
    public router: Router, 
    public data: DataService
  ) { }

  ngOnInit() {
    this.createForm();
    this.data.currentUserId.subscribe(id => this.userId = id);
    console.log('Id:' + this.userId);

    // GET ALL BANKS
    this._vendorService.getBanks()
    .subscribe(res => {
      this.vendorBanks = res.data;
    }, err => {
      console.log(err);
    });
  }

  setAccountDetails() {
    const userModel = {
      accountnumber: this.accDetailForm.controls['accNumber'].value,
      accountname: this.accDetailForm.controls['accName'].value,
      bankId: this.accDetailForm.controls['bank'].value
    };

    if (userModel.accountnumber && userModel.accountname && userModel.bankId) {
      console.log(userModel);
      if (this.userId && this.userId != 'No Id') {
        this._vendorService.addAccountDetails(this.userId, userModel).subscribe(res => {
          console.log(res);
          if (res.success == true) {
            // CALL GET USER OTP END POINT
            this._authService.getOtp(this.userId).subscribe(res => {
              console.log('OTP: ' + res.data.otp)
              // SENDING OTP FOUND TO DATA STORE
              if (res.success == true) {
                this.data.changeOtp(res.data.otp);
                this.data.changeOtpControl('second');
                this.router.navigate(['/kyc/otp']);
              }
            });
          } else {
            console.log('Try again, no otp was generated');
            this.router.navigate(['/kyc/login']);
            this._authService.logout();
          }
        }, (err) => {
          console.log(err);
          this.router.navigate(['vendor-bank']);
        });
      } else {
        console.log('Can not proceed with a UserId');
        this.router.navigate(['/kyc/login']);
        this._authService.logout();
      }
    } else {
      console.log('Please enter you pin');
    }
  }

  createForm() {
    this.accDetailForm = this.fb.group({
      accNumber: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      accName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      bank: this.fb.control('', [Validators.required])
    });
  }
}
