import { VendorService } from './../../services/vendor.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { User, UserType, Mode } from './../../models/user';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Venactive: boolean;
  Copactive: boolean;
  userTypeId = 1;
  registerForm;
  vendorRegisterForm;
  userTypeSelector = 1;
  one = 1;
  cooperative_data: string[];

  constructor(public fb: FormBuilder, public _authService: AuthService, public router: Router, public dialog: MatDialog, public _vendorService: VendorService) {
  }

  ngOnInit() {
    this.activeCooperator();
    this.createForm();
    this.createVendorForm();

    // GET ALL COOPERATIVES
    this._authService.getCooperatives()
      .subscribe(res => {
        this.cooperative_data = res.data;
      }, err => {
        console.log(err);
      });
  }

  // Require user model
  userModel = new User();
  // Require user types
  userTypes = new UserType().types;
  // Require user mode
  userModes = new Mode().types;

  openDialog(): void {
    console.log('trying to open..')
    const dialogRef = this.dialog.open(RegisterSuccessDialog, {
    });
    dialogRef.beforeClose().subscribe(res => {
      this.router.navigate(['/kyc/login']);
      console.log('The dialog was closed');
      console.log(res);
    });
  }

  activeCooperator() {
    this.Copactive = true;
    this.Venactive = false;
    this.userTypeId = 1;
    this.userTypeSelector = 1;
  }

  activeVendor() {
    this.Venactive = true;
    this.Copactive = false;
    this.userTypeId = 2;
    this.userTypeSelector = 2;
  }

  register() {
    const _usertype = (this.userTypes.find(ut => ut.id === this.userTypeSelector));
    const _usermode = this.userModes[0].name;
    const _coopId = this.registerForm.controls['coopId'].value;
    const _email = this.registerForm.controls['email'].value;

    this.userModel = {
      id: _email,
      cooperativeId: _coopId,
      mode: _usermode,
      name: '',
      usertype: _usertype.name
    }
    const res = this._authService
      .registerUser(this.userModel)
      .subscribe(res => {
        console.log(res);
        console.log('Registered!!!');
        this.openDialog();
        (err) => {
          console.log(err);
        };
      });
  }

  vendorRegister() {
    const _usertype = (this.userTypes.find(ut => ut.id === this.userTypeSelector));
    const _usermode = this.userModes[0].name;
    const _bname = this.vendorRegisterForm.controls['businessName'].value;
    const _email = this.vendorRegisterForm.controls['vendorEmail'].value;

    if (_usertype && _usermode && _bname && _email) {
      // Persisting Vendor Data
    this._vendorService.changeUserType(_usertype.name);
    this._vendorService.changeUserMode(_usermode);
    this._vendorService.changeBName(_bname);
    this._vendorService.changeEmail(_email);

    this.router.navigate(['/vendor-phone']);
    } else {
    console.log('Vendor Registration isnt properly filled');    
    }
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      coopId: this.fb.control('', [Validators.required])
    });
  }

  createVendorForm() {
    this.vendorRegisterForm = this.fb.group({
      vendorEmail: this.fb.control('', [Validators.required, Validators.email]),
      businessName: this.fb.control('', [Validators.required, Validators.minLength(3)])
    });
  }
}

@Component({
  selector: './register-successful-dialog',
  templateUrl: './register-successful-dialog.html',
  styleUrls: ['./register.component.css']
})
export class RegisterSuccessDialog {

  constructor(
    public dialogRef: MatDialogRef<RegisterSuccessDialog>,
    @Inject(MAT_DIALOG_DATA) public router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}