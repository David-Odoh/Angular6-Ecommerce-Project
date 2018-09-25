import { UserType } from './../../models/user';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare const jquery: any;
declare const jQuery: any;
declare const $: any;

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit, AfterViewInit {
  otpFlag: string;
  verifyOtpForm;
  id;
  userId;
  concatUserInput;
  otp;
  sent = false; //Control for Resending OTP
  goto = '/shop/history/transactions'

  constructor(public fb: FormBuilder, public _authService: AuthService, public data: DataService, public router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
    this.data.currentUserId.subscribe(id => this.userId = id);
    this.data.currentOtp.subscribe(otp => this.otp = otp);
    this.data.currentOtpControl.subscribe(flag => this.otpFlag = flag)
    console.log('Id:' + this.userId);
    console.log('Otp:' + this.otp);
    console.log('Flag: ' + this.otpFlag);
  }

  ngAfterViewInit() {
    // Auto tab to next input
    $(".inputs").keyup(function () {
      if (this.value.length == this.maxLength) {
        $(this).next('.inputs').focus();
      }
    });

  }

  // Require user types
  userTypes = new UserType().types;

  openDialog(): void {
    console.log('trying to open..')
    const dialogRef = this.dialog.open(IntialSetupCompleteDialog, {
    });

    dialogRef.beforeClose().subscribe(res => {
      this.router.navigate([`${this.goto}`]);
      console.log('The dialog was closed');
      console.log(res);
    });
  }

  resendOtp() {
    this._authService.getOtp(this.userId).subscribe(res => {
      console.log('OTP: ' + res.data.otp)


      // SENDING OTP FOUND TO DATA STORE
      if (res.success == true) {
        this.data.changeOtp(res.data.otp);
        // RESEND OTP CONTROL 
        setTimeout(() => {
          this.sent = true;
        }, 2000);
        setTimeout(() => {
          this.sent = false;
        }, 3000);
      }
    });
  }

  verifyOtp() {
    const _one = this.verifyOtpForm.controls['one'].value;
    const _two = this.verifyOtpForm.controls['two'].value;
    const _three = this.verifyOtpForm.controls['three'].value;
    const _four = this.verifyOtpForm.controls['four'].value;
    const _five = this.verifyOtpForm.controls['five'].value;
    const _six = this.verifyOtpForm.controls['six'].value;
    this.concatUserInput = _one + _two + _three + _four + _five + _six;
    console.log('User entered this Otp: ' + this.concatUserInput);
    console.log(this.userId);

    if (this.userId != 'No Id' && this.otp != 'No Otp') {
      if (this.concatUserInput == this.otp) {
        this._authService.verifyOtp(this.concatUserInput, this.userId).subscribe(res => {
          console.log(res);
          console.log('BINGO!!!');

            // COOPERATOR
            console.log(res.data.userTypeId);
            if (res.data.userTypeId == this.userTypes[0].name) {
            // FLAG KEEPS TRACK OF OTP SCREEN USAGE
                if (this.otpFlag === 'first')
                  this.router.navigate(['/kyc/transaction-pin']);
            
                if (this.otpFlag === 'second') {
                  this.goto = '/shop/history/transactions';
                  this.openDialog();
                  console.log('Done!!!');            
                }
            }
         
            // VENDOR          
            if (res.data.userTypeId == this.userTypes[1].name) {
              // FLAG KEEPS TRACK OF OTP SCREEN USAGE
              if (this.otpFlag === 'first')
                this.router.navigate(['vendor-bank']);

              if (this.otpFlag === 'second') {
                this.goto = 'vendor/my-transaction-history';
                this.openDialog();
                console.log('Done!!!'); 
              }
            }
        }
        );

      } else {
        console.log('Wrong Otp Supplied, Try again!');
        this.router.navigate(['/kyc/otp']);
      }
    } else {
      console.log('Wrong Otp and UserId Found!');
      this.router.navigate(['/kyc/login']);
      this._authService.logout();
    }
  }

  createForm() {
    this.verifyOtpForm = this.fb.group({
      one: this.fb.control('', [Validators.required]),
      two: this.fb.control('', [Validators.required]),
      three: this.fb.control('', [Validators.required]),
      four: this.fb.control('', [Validators.required]),
      five: this.fb.control('', [Validators.required]),
      six: this.fb.control('', [Validators.required])
    });
  }
}

@Component({
  selector: './intial-setup-complete-dialog',
  templateUrl: './intial-setup-complete-dialog.html',
  styleUrls: ['./otp.component.css']
})
export class IntialSetupCompleteDialog {

  constructor(
    public dialogRef: MatDialogRef<IntialSetupCompleteDialog>,
    @Inject(MAT_DIALOG_DATA) public router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}