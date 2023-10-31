import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sales-enquiry',
  templateUrl: './sales-enquiry.component.html',
  styleUrls: ['./sales-enquiry.component.css']
})
export class SalesEnquiryComponent implements OnInit {
  enquiryForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      lookingFor: ['', Validators.required],
      username: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], // for Indian mobile number
      companyName: [''],
      designationName: [''],
      email: ['', [Validators.required, Validators.email]],
      city: ['']
    });
   }

  ngOnInit(): void {
 
  }

  onSubmit(): void {

      console.log(this.enquiryForm.value);


  }
}