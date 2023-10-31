import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

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
import { JobsComponent } from './job/jobs/jobs.component';
import { MarketingComponent } from './job/marketing/marketing.component';
import { MumbaiComponent } from './job/mumbai/mumbai.component';
import { ParttimejobComponent } from './job/parttimejob/parttimejob.component';
import { PuneComponent } from './job/pune/pune.component';
import { RemoteComponent } from './job/remote/remote.component';
import { SalesComponent } from './job/sales/sales.component';
import { WFHComponent } from './job/wfh/wfh.component';
import { MncComponent } from './job/mnc/mnc.component';



const routes: Routes = [
  {
    path:'profile',
    component:ProfileComponent
  },

  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'bangalore',
    component:BangaloreComponent
  },
  {
    path:'chennai',
    component:ChennaiComponent
  },
  {
    path:'data',
    component:DataComponent
  },
  {
    path:'delhi',
    component:DelhiComponent
  },
  {
    path:'engineering',
    component:EngineeringComponent
  },
  {
    path:'fresher',
    component:FresherComponent
  },
  {
    path:'hr',
    component:HRComponent
  },
  {
    path:'hyderabad',
    component:HyderabadComponent
  },
  {
    path:'it',
    component:ITComponent
  },
  {
    path:'jobs',
    component:JobsComponent
  },
  {
    path:'marketing',
    component:MarketingComponent
  },

  {
    path:'mumbai',
    component:MumbaiComponent
  },
  {
    path:'parttimejob',
    component:ParttimejobComponent
  },
  {
    path:'pune',
    component:PuneComponent
  },
  {
    path:'remote',
    component:RemoteComponent
  },
  {
    path:'sales',
    component:SalesComponent
  },
  {
    path:'mnc',
    component:MncComponent
  },

  {
    path:'wfh',
    component:WFHComponent
  },
  {
    path:'company',
    component:CompanyComponent
  },
  {
    path:'featured',
    component:FeaturedComponent
  },
  {
    path:'fintech',
    component:FintechComponent
  },
  {
    path:'internet',
    component:InternetComponent
  },
  {
    path:'itcompanies',
    component:ItCompaniesComponent
  },
 
  {
    path:'productbase',
    component:ProductBaseComponent
  },
  {
    path:'sponsored',
    component:SponsoredComponent
  },
  {
    path:'wfh',
    component:WFHComponent
  },
  {
    path:'startup',
    component:StartupComponent
  },
  {
    path:'topcompanies',
    component:TopCompaniesComponent
  },
  {
    path:'unicorn',
    component:UnicornComponent
  },


  {
    path:'detale',
    component:DetaleComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
