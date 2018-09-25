import { DataService } from './../../services/data.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { User, Mode } from './../../models/user';
import { AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-set-transaction-pin',
  templateUrl: './set-transaction-pin.component.html',
  styleUrls: ['./set-transaction-pin.component.css']
})
export class SetTransactionPinComponent implements OnInit {
  changePinForm;
  userId;

  constructor(public fb: FormBuilder, public _authService: AuthService, public router: Router, public data: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
    this.data.currentUserId.subscribe(id => this.userId = id);
    console.log('Id:' + this.userId);
  }

  changePin() {
    const userModel = {
      pin: this.changePinForm.controls['pin'].value,
      confirmpin: this.changePinForm.controls['conPin'].value,
    };

    if (userModel.pin && userModel.confirmpin) {
      console.log(userModel);
      if (this.userId && this.userId != 'No Id') {
        this._authService.setTransactionPin(this.userId, userModel).subscribe(res => {
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
          this.router.navigate(['/kyc/transaction-pin']);
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
    this.changePinForm = this.fb.group({
      pin: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      conPin: this.fb.control('', [Validators.required, Validators.minLength(3)])
    }, { validator: this.comparingPins });
  }

  comparingPins(_formGroup: FormGroup): { invalid: boolean } {
    if (_formGroup.get('pin').value !== _formGroup.get('conPin').value) {
      return { invalid: true };
    }
  }
}
