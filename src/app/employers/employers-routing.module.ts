import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersnavbarComponent } from './employercomponents/employersnavbar/employersnavbar.component';
import { LoginemployerComponent } from './loginemployer/loginemployer.component';
import { PostAJobComponent } from './post-a-job/post-a-job.component';
import { SignupemployersComponent } from './signupemployers/signupemployers.component';
import { CompanyprofileComponent } from './employercomponent/companyprofile/companyprofile.component';
import { MessagesComponent } from './employercomponent/messages/messages.component';
import { NotificationComponent } from './employercomponent/notification/notification.component';
import { SearchResumeComponent } from './employercomponent/search-resume/search-resume.component';
import { ViewResponsesComponent } from './employercomponent/view-responses/view-responses.component';
import { PostinternshipComponent } from './employercomponent/postinternship/postinternship.component';
import { PostclassifiedComponent } from './employercomponent/postclassified/postclassified.component';
import { ManagejobComponent } from './employercomponent/managejob/managejob.component';
import { DashboardComponent } from './employercomponent/dashboard/dashboard.component';
import { CartpageComponent } from './employercomponents/cartpage/cartpage.component';
import { PaymentpageComponent } from './employercomponents/paymentpage/paymentpage.component';

const routes: Routes = [
  {
    path:'postajob',
    component:PostAJobComponent
  },

  {
    path:'employerslogin',
    component:LoginemployerComponent
  },
  {
    path:'employerssignip',
    component:SignupemployersComponent
  },

  { path: 'employersnavbar', component: EmployersnavbarComponent },
  { path: 'companyprofile', component: CompanyprofileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'searchresume', component: SearchResumeComponent },
  { path: 'viewresponse', component: ViewResponsesComponent },
  { path: 'postintern', component: PostinternshipComponent },
  { path: 'classified', component: PostclassifiedComponent },
  { path: 'managejob', component: ManagejobComponent },
  { path: 'companyprofile', component: CompanyprofileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cartpage', component: CartpageComponent },
  { path: 'paymentpage', component: PaymentpageComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployersRoutingModule { }
