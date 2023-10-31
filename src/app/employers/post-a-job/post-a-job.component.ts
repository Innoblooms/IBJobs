import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmployerserviceService } from '../employerservice.service';

@Component({
  selector: 'app-post-a-job',
  templateUrl: './post-a-job.component.html',
  styleUrls: ['./post-a-job.component.css']
})

export class PostAJobComponent {
  Postjob: any;
  submitted = false;

  constructor(private User: EmployerserviceService, private fb: FormBuilder) {

    this.Postjob = this.fb.group({

      jobTitle: ['', Validators.required],
      employmentType: ['Full Time, Permanent', Validators.required],
      workMode: ['In office', Validators.required],
      jobDescription: ['', Validators.required],
      candidateProfile: ['', Validators.required],
      perksBenefits: ['', Validators.required],
      keySkills: ['', Validators.required],
      workExperienceMin: [0, Validators.required],
      workExperienceMax: [0, Validators.required],
      salaryMin: [0, Validators.required],
      salaryMax: [0, Validators.required],
      location: ['', Validators.required],
      industry: ['', Validators.required],
      department: ['', Validators.required],
      referenceCode: ['', Validators.required],
      vacancies: [0, Validators.required],
      educationalQualification: ['', Validators.required],
      videoProfile: ['Yes', Validators.required],
      companyName: ['', Validators.required],
      companyWebsite: [''],
      companyDetails: ['', Validators.required],
      companyAddress: ['', Validators.required],
      recruiterName: ['', Validators.required],
      recruiterEmail: ['', [Validators.required, Validators.email]],
      recruiterPhone: ['', Validators.required],
    });

  }



  submitJob() {
    this.submitted = true;

    // if (this.Postjob.invalid) {
    //   return;
    // }

    if (this.Postjob.valid) {
      this.User.PostJobs(this.Postjob.value).subscribe({
        next: (result: any) => {
          console.log(result);
          alert('Job posted successfully');
          this.Postjob.reset();
        }
      });
    }
  }
}
