import { DataService } from './../../services/data.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { User, Mode } from './../../models/user';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  changePassForm;
  userId;
  oldPassword;

  constructor(public fb: FormBuilder, public _authService: AuthService, public router: Router, public data: DataService) { }

  // Require user mode
  userModes = new Mode().types;

  ngOnInit() {
    this.createForm();
    this.data.currentUserId.subscribe(id => this.userId = id);
    this.data.currentUserPassword.subscribe(pass => this.oldPassword = pass);
    console.log('Id:' + this.userId);
    console.log('Old Password:' + this.oldPassword);
  }

  resetPassword() {
    const userModel = {
      oldPassword: this.oldPassword,
      newPassword: this.changePassForm.controls['newPassword'].value,
      verifyPassword: this.changePassForm.controls['conPassword'].value,
      userMode: this.userModes[0].name
    };

    console.log(userModel);
    this._authService.resetPassword(this.userId, userModel).subscribe(res => {
      console.log(res);
      if (res.success == true) {
        // CALL GET USER OTP END POINT
        this._authService.getOtp(this.userId).subscribe(res => {
          console.log('OTP: ' + res.data.otp)
          // SENDING OTP FOUND TO DATA STORE
          if (res.success == true) {
            this.data.changeOtp(res.data.otp);
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
      this.router.navigate(['/kyc/change-password']);
    });
  }

  createForm() {
    this.changePassForm = this.fb.group({
      newPassword: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      conPassword: this.fb.control('', [Validators.required])
    }, { validator: this.comparingPasswords });
  }


  comparingPasswords(_formGroup: FormGroup): { invalid: boolean } {
    if (_formGroup.get('newPassword').value !== _formGroup.get('conPassword').value) {
      return { invalid: true };
    }
  }

}