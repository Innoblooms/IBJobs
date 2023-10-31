
//Aurthor Ravindra yadav
//Start
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of ,timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  private isAuthenticated: boolean = false;
  private isAdmin: boolean = false;
  private permissions: string[] = [];
  private loggedIn: boolean = false;
  private inactivityTimer: any;
  
  private inactivityDuration =   30 * 60 * 1000;
  constructor(private http: HttpClient, private router: Router) {
 
    this.checkAuthenticationToken();
    this.startInactivityTimer();
  }

  private inactivityTimeoutCallback: (() => void) | undefined;

  startInactivityTimer() {
    this.inactivityTimeoutCallback = () => {
      this.logout();
    };

    this.inactivityTimer = setTimeout(this.inactivityTimeoutCallback, this.inactivityDuration);
  }

  resetInactivityTimer() {
    clearTimeout(this.inactivityTimer);
    this.startInactivityTimer();
  }
  // login(EmailD: string, Password: string): Observable<boolean> {
  //   return this.http
  //     .post<any>('http://localhost:3000/IBjobsController/loginUser', { EmailD, Password })
  //     .pipe(
  //       switchMap((user: any) => {
  //         if (user && user.token) {
  
          
  //           localStorage.setItem('authToken', user.token);
  //           this.resetInactivityTimer();
  //           return this.http
  //             .get<any>('http://localhost:3000/IBjobsController/profile', {
  //               headers: {
  //                 Authorization: `Bearer ${user.token}`,
  //               },
  //             })
  //             .pipe(
  //               map((userData: any) => {
  //                 if (userData) {
  //                   this.isAuthenticated = true;
  //                   this.loggedIn = true;
  //                   this.isAdmin = false;
  //                   this.permissions = ['other-permission'];
  //                   return true;
  //                 } else {
  //                   return false;
  //                 }
  //               })
  //             );
  //         } else {
  //           this.isAuthenticated = false;
  //           this.loggedIn = false;
  //           this.isAdmin = false;
  //           return of(false);
  //         }
  //       })
  //     );
  // }
  

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  
  login(EmailD: string, Password: string): Observable<boolean> {
    return this.http
      .post<any>('http://localhost:3000/IBjobsController/loginUser', { EmailD, Password })
      .pipe(
        switchMap((user: any) => {
          if (user && user.token) {
            localStorage.setItem('authToken', user.token);
            this.resetInactivityTimer();
            return this.http
              .get<any>('http://localhost:3000/IBjobsController/profile', {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              })
              .pipe(
                map((userData: any) => {
                  if (userData) {
                    this.isAuthenticated = true;
                    this.loggedIn = true;
                    this.isAdmin = false;
                    this.permissions = ['other-permission'];
                    this['isLoggedInSubject'].next(true); // Notify components
                    return true;
                  } else {
                    return false;
                  }
                })
              );
          } else {
            this.isAuthenticated = false;
            this.loggedIn = false;
            this.isAdmin = false;
            this.permissions = [];
            return of(false);
          }
        })
      );
  }
  
  checkAuthenticationToken() {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.isAuthenticated = true;
      this.loggedIn = true;
      this.startInactivityTimer();
    }
  }

  logout(): void {
    alert('User Successfully Logout');
    localStorage.removeItem('authToken');
    this.isAuthenticated = false;
    this.loggedIn = false;
    this.isAdmin = false;
    this.permissions = [];
    localStorage.setItem('loggedOut', 'true');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUserLoggedIn(): boolean {
    return this.loggedIn;
  }

  setPermissions(permissions: string[]): void {
    this.permissions = permissions;
  }

  getPermissions(): string[] {
    return this.permissions;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }


// harsh code

  // employer login
  loginEmployer(EmprEmail: string, password: string): Observable<boolean> {
    return this.http
      .post<any>('http://localhost:3000/IBjobsController/loginEmployer', { EmprEmail, password })
      .pipe(
        switchMap((employer: any) => {
          if (employer && employer.token) {
            localStorage.setItem('employerTokenKey', employer.token);
            this.resetInactivityTimer();
            return this.http
              .get<any>('http://localhost:3000/IBjobsController/employerprofile', {
                headers: { Authorization: `Bearer ${employer.token}` },
              })
              .pipe(
                map((employerData: any) => {
                  if (employerData) {
                    this.isAuthenticated = true;
                    this.loggedIn = true;
                    return true;
                  }
                  this.isAuthenticated = false;
                  this.loggedIn = false;
                  return false;
                })
              );
          } else {
            this.isAuthenticated = false;
            this.loggedIn = false;
            return of(false);
          }
        })
      );
  }

  checkEmployerAuthenticationToken(): void {
    const authToken = localStorage.getItem('employerTokenKey');
    if (authToken) {
      this.isAuthenticated = true;
      this.loggedIn = true;
      this.startInactivityTimer();
    } else {
      this.isAuthenticated = false;
      this.loggedIn = false;
    }
  }


  logoutEmployer() {
    alert('User Successfully Logout');
    localStorage.removeItem('employerTokenKey');
    this.isAuthenticated = false;
    this.loggedIn = false;
    this.isAdmin = false;
    this.permissions = [];
    localStorage.setItem('loggedOut', 'true');
    this.router.navigate(['/employerslogin']);
  }


  isAuthenticatedEmployer(): boolean {
    return this.isAuthenticated;
  }




}

//End