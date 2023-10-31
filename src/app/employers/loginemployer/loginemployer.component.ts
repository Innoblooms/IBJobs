import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-loginemployer',
  templateUrl: './loginemployer.component.html',
  styleUrls: ['./loginemployer.component.css']
})
export class LoginemployerComponent implements OnInit {
  loginForm: FormGroup;
  showForgotPassword: boolean = false;
  loginError: boolean = false;
  
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) { 
      this.loginForm = this.fb.group({
        EmprEmail: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.loginForm.valid) {
      this.loginError = true;
      console.error('Username and password are required.');
      return;
    }

    const { EmprEmail, password } = this.loginForm.value;

    this.authService.loginEmployer(EmprEmail, password).subscribe(
      loggedIn => {
        if (loggedIn) {
          this.router.navigate(['/postajob']);
        } else {
          this.loginError = true;
          console.error('Login failed. Please check your credentials.');
        }
      },
      error => {
        this.loginError = true;
        console.error('Error during login:', error);
      }
    );
  }

  toggleForgotPasswordForm(): void {
    this.showForgotPassword = !this.showForgotPassword;
  }
}
