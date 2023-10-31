import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployerserviceService } from '../employerservice.service';

@Component({
    selector: 'app-signupemployers',
    templateUrl: './signupemployers.component.html',
    styleUrls: ['./signupemployers.component.css']
})
export class SignupemployersComponent implements OnInit {
    registrationForm!: FormGroup;
    isDetailsEntered = false;
    profileCompletion = 0;
    showPassword = false;
    showConfirmPasswordInput = false;
    showConfirmPassword = false;
    passwordMismatch = false;

    constructor(
        private formBuilder: FormBuilder,
        private emp: EmployerserviceService
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        this.registrationForm = this.formBuilder.group({
            BehalfComp: [''],
            EmprName: [''],
            EmprEmail: [''],
            EmprMobile: [''],
            OwnHiring: [''],
            password: [''],
            ConfirmPassword: [''],
            CompanyName: [''],
            Designation: [''],
            CompanyType: [''],
            Address: [''],
            City: [''],
            State: [''],
            Pincode: [''],
            Updates: [true],
            TermAndCon: [true]
        });
    }

    onPasswordInput(): void {
        const password = this.registrationForm.get('password')?.value;
        this.showConfirmPassword = !!password;
        this.checkPasswords();
    }

    checkPasswords(): void {
        const password = this.registrationForm.get('password')?.value;
        const confirmPassword = this.registrationForm.get('ConfirmPassword')?.value;
        if (password && confirmPassword) {
            this.passwordMismatch = password !== confirmPassword;
        } else {
            this.passwordMismatch = false;
        }
    }

    passwordsValid(): boolean {
        return !this.passwordMismatch && 
               this.registrationForm.get('password')?.value &&
               this.registrationForm.get('ConfirmPassword')?.value;
    }

    toggleShowPassword(): void {
        this.showPassword = !this.showPassword;
    }

    toggleShowConfirmPassword(): void {
        this.showConfirmPasswordInput = !this.showConfirmPasswordInput;
    }

    hasValue(controlName: string): boolean {
        return !!this.registrationForm.get(controlName)?.value;
    }

    setRecruitCons(): void {
        const control = this.registrationForm.get('OwnHiring');
        if (control?.value === 'company') {
            // Additional logic for when "company" is selected can be added here.
        }
    }

    setOwnHiring(): void {
        const control = this.registrationForm.get('OwnHiring');
        if (control?.value === 'individual') {
            // Logic for when "individual" is selected
        }
    }

    onContinue(): void {
        if (this.hasValue('BehalfComp') && 
            this.hasValue('EmprName') &&
            this.hasValue('EmprEmail') &&
            this.hasValue('EmprMobile') &&
            this.passwordsValid()) {
            this.isDetailsEntered = true;
            this.profileCompletion = 100;
        }
  
    }

    onRegister(): void {
        this.emp.EmployerReg(this.registrationForm.value).subscribe(
            result => {
                console.log(result);
                alert('login successfully');
                this.resetFormAndState();  // <-- Add this line
            },
            error => {
                console.error('There was an error during the registration process:', error);
                alert('Failed to register. Please try again later.');
            }
        );
    }
    
    resetFormAndState(): void {
        this.registrationForm.reset();
        this.isDetailsEntered = false;
        this.profileCompletion = 0;
        this.showPassword = false;
        this.showConfirmPassword = false;
        this.passwordMismatch = false;
    }
}
