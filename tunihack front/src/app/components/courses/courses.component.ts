import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  filteredCourses: any[] = []; 
  searchTerm: string = ''; 
  courses: any[] = []; 
  authorimages: any[]=["assets/images/author-01.png","assets/images/author-02.png","assets/images/author-03.png"]
  imagecourses : any[]=["assets/images/1.jpg","assets/images/2.jpg","assets/images/3.jpg","assets/images/4.jpg","assets/images/5.jpg","assets/images/6.jpg"]

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getAllCourses(); 
  }
 generateRandomNumber(): number {
  return Math.floor(Math.random() * (5 - 0 + 1)) + 0;
}
generateAnotherRandomNumber(): number {
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}
  // Method to get all courses
  getAllCourses(): void {
    this.coursesService.findAll().subscribe(
      (data: any) => {
        this.courses = data; 
        console.log('Courses fetched successfully:', this.courses);
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }
  filterCourses(): void {
    if (this.searchTerm) {
      this.filteredCourses = this.courses.filter(course => 
        course.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCourses = this.courses; 
    }
  }
}
