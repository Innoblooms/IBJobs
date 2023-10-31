import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent {
  profileForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      companyProfile: ['', Validators.required],
      username: ['', Validators.required],
      communicationEmail: ['', [Validators.required, Validators.email]],
      role: [''],
      reportingManager: [''],
      mobileNumber: ['', Validators.pattern('^\\+?[1-9]\\d{1,14}$')], // Simple validation for mobile number
      companyType: [''],
      industryType: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactPersonDesignation: [''],
      websiteURL: ['', Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)], // Simple URL validation
      phoneNumber: ['', Validators.pattern('^\\+?[1-9]\\d{1,14}$')],
      kycStatus: [''],
      panNumber: [''],
      nameOnPanCard: [''],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.pattern('^[1-9][0-9]{5}$')], // Simple Indian pincode validation
      gstin: ['']
    });
  }



  initForm() {
    this.profileForm = this.fb.group({
      // ... the form controls (same as before)
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
