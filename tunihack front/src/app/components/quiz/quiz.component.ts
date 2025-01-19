import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})

export class QuizComponent {
  constructor(private router: Router, private courseService: CoursesService) {}  // Inject the service
  recommendedCourses: any[] = [];  // Array to hold recommended courses

  currentQuestionIndex: number = 0;
  answersList:string[]=[]
  answer={}
  questions = [
    { question: 'How old are you ?', options: ['16-20', '20-40', '+40'] },
    { question: 'How much time can you dedicate to learning per week?', options: ['Less than 5 hours', '5-10 hours', 'More than 10 hours'] },
    { question: 'What is your current skill level in Artificial Intelligence?', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { question: 'What motivates you to learn?', options: ['Career Growth', 'Personal Interest', 'Other'] },
    { question: 'How do you like the content delivered?', options: ['Videos', 'Text', 'Interactive Activities'] },
  ];

  nextQuestion(selectedOption: string) {
    console.log('Selected Option:', selectedOption);
    this.answersList.push(selectedOption);
    this.currentQuestionIndex++;
  }
  navigateToCourses() {
    this.answer={ageGroup:this.answersList[0],timePerWeek:this.answersList[1],aiSkillLevel:this.answersList[2],
      motivation:this.answersList[3],contentPreference:this.answersList[4]}

     this.courseService.getRecommendedCourses(this.answer).subscribe(
      (courses) => {
        this.recommendedCourses = courses;  
        console.log('Recommended Courses:', this.recommendedCourses);
        this.router.navigate(['/RecommendedCourses'], {
          state: { recommendedCourses: this.recommendedCourses }
        });
        
      },
      (error) => {
        console.error('Error fetching recommended courses:', error);
      }
    );
  }
  }

