import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isEditing: boolean = false;
  profileImageUrl: string = 'path_to_default_image';
  
  profileVisibility: string = 'public';
  
  personalInfo = {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      resumeHeadline: ''
  };
  
  workExperiences = [
      {
          role: '',
          company: '',
          startDate: '',
          endDate: '',
          description: ''
      }
  ];

  education = [
      {
          degree: '',
          institution: '',
          startYear: '',
          endYear: ''
      }
  ];
  
  certifications = [
      {
          name: '',
          authority: '',
          dateOfIssue: ''
      }
  ];
  
  skills: string[] = [];
  skillsString: string = '';

  languages: string[] = [];
  languagesString: string = '';

  projects = [
      {
          title: '',
          description: ''
      }
  ];
  
  toggleEditMode(): void {
      this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
      if (this.isEditing) {
          // Convert comma separated strings to arrays for skills and languages
          this.skills = this.skillsString.split(',').map(skill => skill.trim());
          this.languages = this.languagesString.split(',').map(lang => lang.trim());
      }
      this.toggleEditMode();

      // TODO: Call service to save changes to backend
  }



  applyForJob(): void {
      // TODO: Logic to apply for a specific job
  }
  selectedFile: Blob | null = null;

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }

  downloadResume() {
    if (this.selectedFile) {
      const downloadURL = window.URL.createObjectURL(this.selectedFile);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'resume.pdf'; // Ya koi aur name jo aap dena chahte hain
      link.click();
    }
  }
  }
  

  
  


  


