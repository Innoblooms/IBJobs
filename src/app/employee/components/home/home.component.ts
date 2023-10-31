import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, map, Observable, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  searchTerm: string = '';
  searchLocation: string = '';
  selectedExperience: string = '';
  filteredJobs: any[] = [];
  experience: string[] = [
    '0-1 years',
    '1-2 years',
    '2-3 years',
    '3-5 years',
    '2-5 years',
    '1-10 years' /* ... */,
  ];

  selectedSkills: string[] = [];
  selectedSalaries: string[] = [];
  selectedLocations: string[] = [];

  slides = ['assets/img3.avif', 'assets/img1.jpg', 'assets/img2.jpg'];
  allCards = [
    {
      imgSrc: 'assets/img2.jpg',
      title: 'About IB Jobs',
      text: 'A digital recruitment platform streamlining the hiring process for both job seekers and employers, ensuring optimal job matches with AI-driven tools.',
    },
    {
      imgSrc: 'assets/img3.avif',
      title: 'Innovative Solutions',
      text: 'We leverage state-of-the-art technologies to ensure candidates find their dream roles and employers connect with the best talents.',
    },
    {
      imgSrc: 'assets/img1.jpg',
      title: 'Diverse Listings',
      text: 'From startups to multinational companies, explore job opportunities that best align with your skills and aspirations.',
    },
    {
      imgSrc: 'assets/img3.avif',
      title: 'For Employers',
      text: 'Effortlessly post job listings, interact with potential candidates, and use our analytics tools to make informed hiring decisions.',
    },
    {
      imgSrc: 'assets/img2.jpg',
      title: 'Success Stories',
      text: 'Hear from our vast community of satisfied users. From dream jobs to perfect hires, IB Jobs continually makes success stories.',
    },
    {
      imgSrc: 'assets/img1.jpg',
      title: 'Continuous Learning',
      text: 'With webinars, workshops, and training sessions, we ensure our users always stay ahead in the ever-evolving job market.',
    },
  ];

  autoSlideSubscription?: Subscription;



//Aurthor Ravindra yadav
// start The Function select the Technology and Location and After SERCH Click dzired Router

onSearch() {
  if (this.searchForm.valid) {
    // Only navigate if the form is valid
    this.router.navigate(['/mnc']);
  }
}
  searchForm: FormGroup;
  constructor(private router: Router,private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      technology: ['', Validators.required],
      location: ['', Validators.required],
      experience: (''),
    });

  }

  ngOnInit() {
    this.autoSlideSubscription = interval(3000).subscribe(() =>
      this.nextSlide()
    );

    // This Function make Filter The State and City
    this.filteredOptionss = this.myControlLocation.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterLocation(value))
    );


    // This Functuion   the Filter The Technology and Desiganation
    this.filteredOptions = this.myControlTechnology.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterTechnology(value))
    );
  }




  //This Function show The State
  myControlLocation = new FormControl();
  filteredOptionss: any;
  indianStates: string[] = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    "Lucknow",
"Kanpur",
"Agra",
"Varanasi",
"Meerut",
"Allahabad",
"Ghaziabad",
"Noida",
"Mathura",
"Bareilly",
"Aligarh",
"Moradabad",
"Gorakhpur",
"Jhansi",
"Saharanpur",
"Muzaffarnagar",
"Faizabad",
"Ayodhya",
"Rampur",
"Shahjahanpur",
"Firozabad",
"Amroha",
"Hardoi",
"Fatehpur",
"Mirzapur",
"Hapur",
"Gonda",
"Pilibhit",
"Jaunpur",
"Lakhimpur",
"Unnao",
"Barabanki",
"Sultanpur",
"Bijnor",
"Bahraich",
"Deoria",
"Sitapur",
"Mau",
"Orai",
"Rae Bareli",
"Bhadohi",
"Modinagar",
"Sahaswan",
"Banda",
"Baheri",
"Basti",
"Khurja",
"Tanda",
"Greater Noida",
"Akbarpur",
"Ballia",
"Mughalsarai",
"Jaunpur",
"Sandila",
"Shamli",
"Khatauli",
"Bulandshahr",
"Shikohabad",
"Nawabganj",
"Naini",
"Renukoot",
"Sambhal",
"Rae Bareli",
"Lakhimpur",
"Khair",
"Vrindavan",
"Utraula",
"Lalitpur",
"Etawah",
"Bareilly",
"Gonda",
"Barabanki",
"Orai",
"Ballia",
"Khurja"
  ];

  private _filterLocation(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.indianStates.filter((state) =>
      state.toLowerCase().includes(filterValue)
    );
  }

  //End The Function Filter Loaction

  // This Functuion Show The Technology

  myControlTechnology = new FormControl();
  filteredOptions: any;
  options: string[] = [
    'Angular',
    'React',
    'Vue.js',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
    'Python',
    'Java',
    'Full',
    'Ruby',
    'PHP',
    'C#',
    'Swift',
    'Kotlin',
    'Go',
    'Rust',
    'Scala',
    'Perl',
    'Haskell',
    'Lua',
    'Dart',
    'Elixir',
    'Backend',
    'Frontend',
    'AI',
    'Game Development',
    'Data',
    'Database',
    'Subscribe',
    'Fullstack Web Developer',
    'Fullstack Engineer',
    'Mean Stack Developer',
    'Java Full Stack Developer',
    'Fullstack Developer',
    'Java Architect',
    'Freelancer',
    'Dot Net Fullstack Developer',
    'Front end',
    'Front office',
    'Frontend Development',
    'Front End Developer',
    'Front Office Executive',
    'Front desk',
    'Frontend Web Developer',
    'Front Office Receptionist',
    'Data',
    'Data Entry Operator',
    'Data Entry',
    'Data Analyst',
    'Datastage',
    'Big Data',
    'Oracle Database Administrator',
    'Clinical Data Management',
  ];

  private _filterTechnology(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  //End The Funtion filter Technology


//End Write Code Rvindra yadav


  ngOnDestroy() {
    // Clean up subscription to prevent memory leaks
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
  }
  activeSlide: number = 0;

  prevSlide() {
    this.activeSlide =
      this.activeSlide > 0 ? this.activeSlide - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.activeSlide =
      this.activeSlide < this.slides.length - 1 ? this.activeSlide + 1 : 0;
  }

  startIndex = 0;
  visibleCards = this.allCards.slice(this.startIndex, this.startIndex + 3);

  prevCards() {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.updateVisibleCards();
    }
  }

  nextCards() {
    if (this.startIndex < this.allCards.length - 3) {
      this.startIndex++;
      this.updateVisibleCards();
    }
  }

  updateVisibleCards() {
    this.visibleCards = this.allCards.slice(
      this.startIndex,
      this.startIndex + 3
    );
  }
  categories = [
    { iconClass: 'fa fa-laptop', name: 'Remote' },
    { iconClass: 'fa fa-building', name: 'MNC' },
    { iconClass: 'fa fa-handshake-o', name: 'Sales' },
    { iconClass: 'fa fa-code', name: 'IT' },
    { iconClass: 'fa fa-line-chart', name: 'Analytics' },
    { iconClass: 'fa fa-university', name: 'Internship' },
    { iconClass: 'fa fa-gears', name: 'Engineering' },
    { iconClass: 'fa fa-tasks', name: 'HR' },
    { iconClass: 'fa fa-clock-o', name: 'Part Time' },
    { iconClass: 'fa fa-rocket', name: 'Startup' },
    { iconClass: 'fa fa-graduation-cap', name: 'Fresher' },
  ];

  Companies = [
    { iconClass: 'fa fa-laptop', name: 'Infosys' },
    { iconClass: 'fa fa-handshake-o', name: 'Capegimini' },
    { iconClass: 'fa fa-tasks', name: 'TCS' },
    { iconClass: 'fa fa-clock-o', name: 'Cognizant' },
    { iconClass: 'fa fa-rocket', name: 'Genpact' },
    { iconClass: 'fa fa-line-chart', name: 'harman' },
    { iconClass: 'fa fa-gears', name: 'zensar' },
    { iconClass: 'fa fa-graduation-cap', name: 'xoriant' },
  ];

  Searches = [
    { iconClass: 'fa fa-laptop', name: 'Digital Marketing' },
    { iconClass: 'fa fa-handshake-o', name: 'Software engineer' },
    { iconClass: 'fa fa-tasks', name: 'Work from home jobs' },
    { iconClass: 'fa fa-clock-o', name: 'Manual testing' },
    { iconClass: 'fa fa-rocket', name: 'HR executive' },
    { iconClass: 'fa fa-line-chart', name: 'Data analyst' },
    { iconClass: 'fa fa-gears', name: 'Accounting' },
    { iconClass: 'fa fa-graduation-cap', name: 'Business analyst' },
  ];

  // method to map company names to background image URLs
  getCategoryImageURL(companyName: string): string {
    const imageMap: { [key: string]: string } = {
      Infosys: 'assets/infosys.jpeg',
      Capegimini: 'assets/capegemini.jpeg',
      harman: 'assets/harman.jpeg',
      Cisco: 'assets/bg333.jpg',
      zensar: 'assets/zensar.jpeg',
      TCS: 'assets/tcs.jpeg',
      Cognizant: 'assets/cognigent.jpeg',
      Genpact: 'assets/genpact.jpeg',
      xoriant: 'assets/xoriant.jpeg',
    };

    // Return the image URL based on the company name
    return imageMap[companyName] || 'assets/tcs.jpeg'; // You can provide a default image URL as well.
  }
  

  navigateToCategory(categoryName: string) {
    // assuming you have routes set up with the category names
    this.router.navigate([
      `/${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
    ]);
  }
}
