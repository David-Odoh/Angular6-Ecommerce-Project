import { AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Vendor } from './../../../models/user';
import { VendorService } from './../../../services/vendor.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.css']
})
export class PhoneVerificationComponent implements OnInit {
  verificationForm;
  usertype;
  usermode;
  bname;
  email

  constructor(public fb: FormBuilder, public _vendorService: VendorService, public router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.createForm();
    this._vendorService._usertype.subscribe(data => this.usertype = data);
    this._vendorService._usermode.subscribe(data => this.usermode = data);
    this._vendorService._bname.subscribe(data => this.bname = data);
    this._vendorService._email.subscribe(data => this.email = data);
  }

  // Require user model
  vendorModel = new Vendor();
  
  createForm() {
    this.verificationForm = this.fb.group({
      phone: this.fb.control('', [Validators.required, Validators.maxLength(10)])
    });
  }

  openDialog(): void {
    console.log('trying to open..')
    const dialogRef = this.dialog.open(RegisterSuccessDialog, {
    });
    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate(['/kyc/login']);
      console.log('The dialog was closed');
      console.log(res);
    });
  }

  verification() {
    const _phone = this.verificationForm.controls['phone'].value;

    this.vendorModel = {
      id: this.email,
      mode: this.usermode,
      cooperativeId: ' ',
      name: this.bname,
      usertype: this.usertype,
      phoneNo: _phone
    }

    console.log(this.vendorModel);

    const res = this._vendorService.registerVendor(this.vendorModel).subscribe(res => {
        console.log(res);
        console.log('Registered!!!');
        this.openDialog();
        (err) => {
          console.log(err);
        };
      });
  }
}

@Component({
  selector: './register-successful-dialog',
  templateUrl: './vendor-register-successful-dialog.html',
  styleUrls: ['./phone-verification.component.css']
})
export class RegisterSuccessDialog {

  constructor(
    public dialogRef: MatDialogRef<RegisterSuccessDialog>,
    @Inject(MAT_DIALOG_DATA) public router: Router) { }

  onNoClick(): void {
    this.router.navigate(['/kyc/login']);
    this.dialogRef.close();
  }
}
