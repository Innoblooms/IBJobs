import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpserviceService } from '../../services/empservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  selectedFile: File | null = null;
  isFresher: boolean = false;
  outsideIndia: boolean = false;

  cities: string[] = [
    'Ghaziabad',
    'Bangalore/Bengaluru',
    'Hyderabad/Secunderabad',
    'Mumbai',
    'Chennai',
    'New Delhi',
    'Pune',
  ];
  filteredCities: string[] = [];
  selectedCity: string = '';

  countries: string[] = [
    'India',
    'United States',
    'Canada',
    'Australia',
    'United Kingdom',
  ];
  filteredCountries: string[] = [];
  selectedCountry: string = '';

  selectedForeignCity: string = '';

  constructor(private fb: FormBuilder, private empService: EmpserviceService) {}

//aurthor Ravindra Yadav
//Start

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.fb.group({
      FullName: ['', Validators.required],
      EmailD: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      MobileNumber: ['', Validators.required],
      WorkStatus: ['', Validators.required],
      Resume: [''],
      OutsideIndia: [false],
      Country: [''],
      ForeignCity: [''],
      whatsappUpdates: [''],
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

//End

  onFresherSelected(): void {
    this.isFresher = this.registerForm.get('WorkStatus')?.value === 'fresher';
    if (!this.isFresher) {
      this.registerForm.get('OutsideIndia')?.setValue(false);
      this.outsideIndia = false;
    }
  }

  onOutsideIndiaChecked(): void {
    this.outsideIndia = this.registerForm.get('OutsideIndia')?.value;
  }

  onCardClick(status: string): void {
    this.registerForm.get('WorkStatus')?.setValue(status);
  }

  // Handling cities
  onCityInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city) =>
      city.toLowerCase().startsWith(query)
    );
  }

  selectCity(city: string) {
    if (this.cityNotInDatabase(city)) {
      this.selectedCity = city + ', ' + this.getCorrespondingState(city);
    } else {
      this.selectedCity = city;
    }
    this.registerForm.controls['City'].setValue(this.selectedCity);
    this.filteredCities = [];
  }

  clearCity() {
    this.selectedCity = '';
    this.registerForm.controls['City'].setValue('');
  }

  cityNotInDatabase(city: string): boolean {
    return !this.cities.includes(city);
  }

  getCorrespondingState(city: string): string {
    // Placeholder logic, adjust based on your application's requirement
    return 'StateOfTheCity';
  }

  // Handling countries
  onCountryInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCountries = this.countries.filter((country) =>
      country.toLowerCase().startsWith(query)
    );
  }

  selectCountry(country: string) {
    this.selectedCountry = country;
    this.registerForm.controls['Country'].setValue(country);
    this.filteredCountries = [];
  }

  clearCountry() {
    this.selectedCountry = '';
    this.registerForm.controls['Country'].setValue('');
  }

  // Handling foreign city
  onForeignCityInput(event: any) {
    this.selectedForeignCity = event.target.value;
    this.registerForm.controls['ForeignCity'].setValue(
      this.selectedForeignCity
    );
  }

  clearForeignCity() {
    this.selectedForeignCity = '';
    this.registerForm.controls['ForeignCity'].setValue('');
  }



//Aurthor Ravindra yadav
//Start 

  onSubmit() {
    this.empService.empreg(this.registerForm.value).subscribe((res: any) => {
      console.log(this.registerForm.value);
    });
    alert('data Saved sucessfully');
  }
//End


  googleLogin(){

  }
}
