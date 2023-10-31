import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notifications = [
    { 
        name: 'John Doe',
        jobTitle: 'Software Developer',
        image: 'path/to/john-image.jpg' // Yahan aap image ka path dal sakte hain.
    },
    { 
        name: 'Jane Smith',
        jobTitle: 'Graphic Designer',
        image: 'path/to/jane-image.jpg' // Yahan aap image ka path dal sakte hain.
    }
];
}
