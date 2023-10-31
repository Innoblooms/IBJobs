import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SalesEnquiryComponent } from './sales-enquiry/sales-enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostAJobComponent } from './post-a-job/post-a-job.component';
import { PostfooterComponent } from './postfooter/postfooter.component';
import { LoginemployerComponent } from './loginemployer/loginemployer.component';
import { SignupemployersComponent } from './signupemployers/signupemployers.component';
import { EmployersnavbarComponent } from './employercomponents/employersnavbar/employersnavbar.component';
import { EmployersRoutingModule } from './employers-routing.module';
import { SearchResumeComponent } from './employercomponent/search-resume/search-resume.component';
import { ViewResponsesComponent } from './employercomponent/view-responses/view-responses.component';
import { CompanyprofileComponent } from './employercomponent/companyprofile/companyprofile.component';
import { NotificationComponent } from './employercomponent/notification/notification.component';

import { DashboardComponent } from './employercomponent/dashboard/dashboard.component';
import { PostinternshipComponent } from './employercomponent/postinternship/postinternship.component';
import { PostclassifiedComponent } from './employercomponent/postclassified/postclassified.component';
import { ManagejobComponent } from './employercomponent/managejob/managejob.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './employercomponent/messages/messages.component';
import { CartpageComponent } from './employercomponents/cartpage/cartpage.component';
import { PaymentpageComponent } from './employercomponents/paymentpage/paymentpage.component';




@NgModule({
  declarations: [
   
    SalesEnquiryComponent,
     PostAJobComponent,
     PostfooterComponent,
     LoginemployerComponent,
     SignupemployersComponent,
     EmployersnavbarComponent,
     SearchResumeComponent,
     ViewResponsesComponent,
     CompanyprofileComponent,
     NotificationComponent,

     DashboardComponent,
     PostinternshipComponent,
     PostclassifiedComponent,
     ManagejobComponent,
     MessagesComponent,
     CartpageComponent,
     PaymentpageComponent
  ],
  imports: [
    CommonModule,
    EmployersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    

    
  ],
})
export class EmployersModule {  constructor() {
  console.log('EmployersModule loaded.');
} }
