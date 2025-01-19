import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; // Import Location for navigating back if needed

@Component({
  selector: 'app-recommended-courses',
  templateUrl: './recommended-courses.component.html',
  styleUrls: ['./recommended-courses.component.css'],
})
export class RecommendedCoursesComponent implements OnInit {
  recommendedCourses: any[] = [];  
  authorimages: any[] = [
    "assets/images/author-01.png",
    "assets/images/author-02.png",
    "assets/images/author-03.png"
  ];
  imagecourses : any[]=["assets/images/1.jpg","assets/images/2.jpg","assets/images/3.jpg","assets/images/4.jpg","assets/images/5.jpg","assets/images/6.jpg"]


  constructor(private location: Location) {}

  ngOnInit(): void {
    const navigationState = history.state.recommendedCourses;
    if (navigationState) {
      this.recommendedCourses = navigationState;  
    }
    console.log(this.recommendedCourses);
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  }

  generateAnotherRandomNumber(): number {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  }

  goBack(): void {
    this.location.back();  
  }
}
