import { NgModule } from '@angular/core';
import { CommonModule ,NgFor, AsyncPipe} from '@angular/common';
import { ReactiveFormsModule, FormsModule ,} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { CompanyComponent } from './companies/company/company.component';
import { FeaturedComponent } from './companies/featured/featured.component';
import { FintechComponent } from './companies/fintech/fintech.component';
import { InternetComponent } from './companies/internet/internet.component';
import { ItCompaniesComponent } from './companies/it-companies/it-companies.component';
import { ProductBaseComponent } from './companies/product-base/product-base.component';
import { SponsoredComponent } from './companies/sponsored/sponsored.component';
import { StartupComponent } from './companies/startup/startup.component';
import { TopCompaniesComponent } from './companies/top-companies/top-companies.component';
import { UnicornComponent } from './companies/unicorn/unicorn.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { BangaloreComponent } from './job/bangalore/bangalore.component';
import { ChennaiComponent } from './job/chennai/chennai.component';
import { DataComponent } from './job/data/data.component';
import { DelhiComponent } from './job/delhi/delhi.component';
import { DetaleComponent } from './job/detale/detale.component';
import { EngineeringComponent } from './job/engineering/engineering.component';
import { FresherComponent } from './job/fresher/fresher.component';
import { HRComponent } from './job/hr/hr.component';
import { HyderabadComponent } from './job/hyderabad/hyderabad.component';
import { ITComponent } from './job/it/it.component';
import { JobCardComponent } from './job/job-card/job-card.component';
import { JobsComponent } from './job/jobs/jobs.component';
import { MarketingComponent } from './job/marketing/marketing.component';
import { MumbaiComponent } from './job/mumbai/mumbai.component';
import { ParttimejobComponent } from './job/parttimejob/parttimejob.component';
import { PuneComponent } from './job/pune/pune.component';
import { RemoteComponent } from './job/remote/remote.component';
import { SalesComponent } from './job/sales/sales.component';
import { WalkinjobComponent } from './job/walkinjob/walkinjob.component';
import { WFHComponent } from './job/wfh/wfh.component';


import { EmployeeRoutingModule } from './employee-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { MncComponent } from './job/mnc/mnc.component';




import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [

    HomeComponent,
    FooterComponent,
    JobsComponent,
    ITComponent,
    SalesComponent,
    MarketingComponent,
    DataComponent,
    HRComponent,
    EngineeringComponent,
    FresherComponent,
  
    RemoteComponent,
    WFHComponent,
    WalkinjobComponent,
    ParttimejobComponent,
    DelhiComponent,
    MumbaiComponent,
    BangaloreComponent,
    HyderabadComponent,
    ChennaiComponent,
    PuneComponent,
    JobCardComponent,
    CompanyComponent,
    UnicornComponent,
  
    StartupComponent,
    ProductBaseComponent,
    InternetComponent,
    TopCompaniesComponent,
    ItCompaniesComponent,
    FintechComponent,
    SponsoredComponent,
    FeaturedComponent,
    DetaleComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    MncComponent,


   

  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
   
    MatSliderModule,
    NgFor,
    AsyncPipe,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  
  ],

})
export class EmployeeModule {  constructor() {
  console.log('EmployeeModule loaded.');
} }

