import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  studentName: string = 'John Doe';
  courses: Array<{ name: string }> = [
    { name: 'Advanced Javascript' },
    { name: 'Angular Essentials' },
    { name: 'Linux OS Mastery' }
  ];
  deadlines: string[] = [
    'Assignment 1 - Sep 20, 2024',
    'Project Proposal - Sep 25, 2024'
  ];
  liveClasses: string[] = [
    'Math Class - Sep 18, 2024',
    'Physics Class - Sep 19, 2024'
  ];
  progress: string = 'You have completed 70% of your courses.';
  notifications: string[] = [
    'New announcement from your Math teacher.',
    'Your Physics assignment has been graded.'
  ];
  resources: string[] = [
    'Math Lecture Notes',
    'Physics Lab Manual'
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    // Handle the logout logic here
    console.log('Logged out');
    this.router.navigate(['/login']);
  }
}
