import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Set first from Login component
  private persistUserId = new BehaviorSubject<string>('No Id');
  private persistUserPassword = new BehaviorSubject<string>('No Password');
  // Changed first in Forgot/Change Password Component
  private otp = new BehaviorSubject<string>('No Otp');
  private otpControl = new BehaviorSubject<string>('first');

  currentUserId = this.persistUserId.asObservable();
  currentUserPassword = this.persistUserPassword.asObservable();
  currentOtp = this.otp.asObservable();
  currentOtpControl = this.otpControl.asObservable();

  constructor() { }

  changeUserId(id: string) {
    this.persistUserId.next(id);
  }

  changeUserPassword(password: string) {
    this.persistUserPassword.next(password);
  }

  changeOtp(otp: string) {
    this.otp.next(otp);
  }

  changeOtpControl(flag: string) {
     this.otpControl.next(flag)
  }
}
