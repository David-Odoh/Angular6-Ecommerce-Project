import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap, } from 'rxjs/operators';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  authToken: any;
  vendor: any;

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  BASE_URL = 'http://54.183.87.149:3000/v1';
  constructor(private http: HttpClient) { }


  // GET: ALL COOPERATIVES
  getBanks(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/banks`, this.httpHeaders)
      .pipe(
      map(res => { return res }),
      catchError(this.handleError)
      );
  }

  // POST: REGISTER USER
  registerVendor(vendor): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users/cooperativestaff`, vendor, this.httpHeaders)
      .pipe(
      map(res => { return res }),
      catchError(this.handleError)
      );
  }

  // GET: USER PROFILE
  getProfile() {
    const headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.BASE_URL}/auth`, { headers: headers })
      .pipe(
      map(res => { return res }),
      catchError(this.handleError)
      );
  }

  // SET VALUES IN BROWSER LOCAL STORAGE
  storeUserData(token, vendor) {
    localStorage.setItem('token_id', token);
    localStorage.setItem('vendor', JSON.stringify(vendor));
    this.authToken = token;
    this.vendor = vendor;
  }

  // GET VALUES FROM BROWSER LOCAL STORAGE
  loadToken() {
    const token = localStorage.getItem('token_id');
    this.authToken = token;
  }

  loggedIn() {
  // return tokenNotExpired();
  }

  // CLEAR  BROWSER LOCAL STORAGE
  logout() {
    this.authToken = null;
    this.vendor = null;
    localStorage.clear();
  }

  // POST: TRANSACTION PIN
 addAccountDetails(userId, contract): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users/setaccountdetails/${userId}`, contract, this.httpHeaders)
      .pipe(
      map(res => { return res }),
      catchError(this.handleError)
      );
  }

  // VENDOR REGISTRATION DATASTORE
        // Vendor Registration Fields
        private _usertypeDefualt = new BehaviorSubject<string>('Empty');
        private _usermodeDefualt = new BehaviorSubject<string>('Empty');
        private _bnameDefualt = new BehaviorSubject<string>('Empty');
        private _emailDefualt = new BehaviorSubject<string>('Empty');
        private _phoneDefualt = new BehaviorSubject<string>('Empty');

        // Vendor Registration Fields
        _usertype = this._usertypeDefualt.asObservable();
        _usermode = this._usermodeDefualt.asObservable();
        _bname = this._bnameDefualt.asObservable();
        _email = this._emailDefualt.asObservable();
        _phone = this._phoneDefualt.asObservable();

        // Change Vendor Registration Values from Registration Component
        changeUserType(flag: string) {
          this._usertypeDefualt.next(flag)
        }
        changeUserMode(flag: string) {
          this._usermodeDefualt.next(flag)
        }
        changeBName(flag: string) {
          this._bnameDefualt.next(flag)
        }
        changeEmail(flag: string) {
          this._emailDefualt.next(flag)
        }
        // Change Vendor Registration Values from Phone Verification Component
        changePhone(flag: string) {
          this._phoneDefualt.next(flag)
        }

  // HANDLE ALL ERRORS
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Server returned code ${error.status}, ` +
        `body was: ${error.error}`);
      if (error.status == 404) {
        return throwError('Vendor Not Found!');
      }
      if (error.status == 409) {
        return throwError('Vendor is Already Registered!');
      }
    }
    return throwError('Oops, unable to complete! please try again later.');
  }
}