import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  candidates = [
    {
      id: 1,
      name: 'John Doe',
      skills: ['Angular', 'React'],
      email: 'john.doe@example.com',
      appliedJobs: ['Frontend Developer', 'Backend Developer']
    },
    {
      id: 2,
      name: 'Jane Smith',
      skills: ['Vue.js', 'Node.js'],
      email: 'jane.smith@example.com',
      appliedJobs: ['Fullstack Developer', 'Frontend Developer']
    },
    {
      id: 3,
      name: 'Robert Brown',
      skills: ['Python', 'Django'],
      email: 'robert.brown@example.com',
      appliedJobs: ['Backend Developer', 'Data Scientist']
    },
    {
      id: 4,
      name: 'Emily White',
      skills: ['Java', 'Spring Boot'],
      email: 'emily.white@example.com',
      appliedJobs: ['Java Developer', 'Backend Developer']
    },
    {
      id: 5,
      name: 'Michael Green',
      skills: ['React', 'Express.js', 'MongoDB'],
      email: 'michael.green@example.com',
      appliedJobs: ['MERN Stack Developer', 'Frontend Developer']
    },
    {
      id: 6,
      name: 'Sara Black',
      skills: ['PHP', 'Laravel'],
      email: 'sara.black@example.com',
      appliedJobs: ['Backend Developer', 'PHP Developer']
    },
    {
      id: 7,
      name: 'Tom Gray',
      skills: ['Ruby', 'Ruby on Rails'],
      email: 'tom.gray@example.com',
      appliedJobs: ['Fullstack Developer', 'Backend Developer']
    },
    {
      id: 8,
      name: 'Lucy Blue',
      skills: ['.NET', 'C#'],
      email: 'lucy.blue@example.com',
      appliedJobs: ['Fullstack .NET Developer', 'Backend Developer']
    },
    {
      id: 9,
      name: 'Mark Yellow',
      skills: ['React', 'Node.js'],
      email: 'mark.yellow@example.com',
      appliedJobs: ['Fullstack Developer', 'Frontend Developer']
    },
    {
      id: 10,
      name: 'Sophia Pink',
      skills: ['Angular', 'TypeScript'],
      email: 'sophia.pink@example.com',
      appliedJobs: ['Frontend Developer', 'Fullstack Developer']
    },
    {
      id: 11,
      name: 'Liam Orange',
      skills: ['Vue.js', 'Firebase'],
      email: 'liam.orange@example.com',
      appliedJobs: ['Frontend Developer', 'Fullstack Developer']
    },
    {
      id: 12,
      name: 'Isabella Indigo',
      skills: ['Svelte', 'Express.js'],
      email: 'isabella.indigo@example.com',
      appliedJobs: ['Frontend Developer', 'Fullstack Developer']
    },
    {
      id: 13,
      name: 'Ethan Violet',
      skills: ['Python', 'Flask'],
      email: 'ethan.violet@example.com',
      appliedJobs: ['Backend Developer', 'Fullstack Developer']
    },
    {
      id: 14,
      name: 'Olivia Gold',
      skills: ['Java', 'Kotlin'],
      email: 'olivia.gold@example.com',
      appliedJobs: ['Android Developer', 'Java Developer']
    },
    {
      id: 15,
      name: 'James Silver',
      skills: ['Swift', 'Objective-C'],
      email: 'james.silver@example.com',
      appliedJobs: ['iOS Developer', 'Mobile Developer']
    }
  ];
  jobsPosted = 150;
  activeJobs = 20;
  receivedApplications = 500;

  recentJobs = [
      { title: 'Frontend Developer', location: 'New York', applications: 50 },
      // Add more job details here
  ];



  constructor() {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
