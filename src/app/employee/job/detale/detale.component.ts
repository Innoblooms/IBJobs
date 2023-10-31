import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent {
  [x: string]: any;
  jobTitle = 'Software Developer';  // Sample value
  companyName = 'Tech Corp';        // Sample value
  jobDescription = 'Develop software...'; // Sample value
  jobLocation = 'New York';         // Sample value
  salary = '$50,000';               // Sample value

  showApplicationForm = false;
  preview: any | ArrayBuffer | null = null;
  isImage: boolean = false;
  isPDF: boolean = false;
  applicationForm: FormGroup | any;


  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.applicationForm = this.fb.group({
      applicantName: [''],
      phoneNumber: [''],
      resume: ['']
    });
  }

  openApplicationForm() {
    this.showApplicationForm = true;
  }

  onApplicationSubmit() {
    console.log(this.applicationForm.value);
    // Handle application submission logic here
  }

  
  jobDetails = {
    jobTitle: 'Full Stack Developer',
    companyName: 'Tech Corp Solutions',
    companyDescription: 'Tech Corp Solutions is a leading tech company specializing in cutting-edge software and infrastructure solutions, ensuring high-quality services for our global clients.',
    jobLocation: 'New York, NY',
    address: '123 Tech Avenue, Suite 456, New York, NY 10001',
    jobDescription: 'We are looking for a passionate Full Stack Developer to design, develop and implement user-centric software solutions. Responsibilities include coding, designing, and enhancing web-based applications.',
    salary: '$80,000 - $100,000 per annum'
  };
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const file = input.files[0];

      // Reset the flags
      this.isImage = false;
      this.isPDF = false;

      // Determine the file type
      if (file.type.startsWith('image')) {
        this.isImage = true;
      } else if (file.type === 'application/pdf') {
        this.isPDF = true;
      }

      this.previewFile(file);
    }
  }

  previewFile(file: File) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
        this.preview = this.sanitizer.bypassSecurityTrustResourceUrl(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
}



  deleteFile() {
    this.preview = null;
    this.applicationForm.patchValue({ resume: null });
    this.applicationForm.get('resume')?.updateValueAndValidity();
    this.isImage = false;
    this.isPDF = false;
  }

}
