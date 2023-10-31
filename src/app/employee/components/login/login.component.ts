import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

//Aurthor Ravindra yadav
//This Code used For Login To employee

  loginForm: FormGroup;
  loginError: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router

    ) {
    this.loginForm = this.formBuilder.group({
        EmailD: ['', Validators.required],
        Password: ['', Validators.required],
    });
  }

  submit(): void {
        if (this.loginForm.valid) {
          const EmailD = this.loginForm.value.EmailD;
          const Password = this.loginForm.value.Password;
          this.authService.login(EmailD, Password).subscribe(
            (loggedIn) => {
              if (loggedIn) {
                this.router.navigate(['/mnc']);
              } else {
                console.error('Login failed. Please check your credentials.');
                this.loginError = true;
              }
            },
            (error) => {
              console.error('Error during login:', error);
              this.loginError = true;
            }
          );
        } else {
          console.error('Username and password are required.');
          this.loginError = true;
        }
  }

  

  //End The Function Employee

  formState: string = 'default';
  isPasswordVisible: boolean = false;
  mobileNumber: string = '';
  otp: string = '';
  otpStep: number = 1;


  setFormState(state: string): void {
    this.formState = state;
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  sendOTP(): void {
    console.log('Sending OTP...');
  }

  loginUser(): void {}

  resetPassword(): void {}

  requestOTP(): void {
    this.otpStep = 2;
  }

  resendOTP(): void {
    console.log('Resending OTP...');
  }

  useEmailLogin(): void {
    console.log('Switching to email login...');
  }

  resetForm(): void {
    this.formState = 'default';
    this.otp = '';
    this.mobileNumber = '';
    this.otpStep = 1;
  }
  googleLogin() {}
}
