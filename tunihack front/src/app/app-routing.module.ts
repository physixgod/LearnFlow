import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { RecommendedCoursesComponent } from './components/recommended-courses/recommended-courses.component';
import { CommunityComponent } from './components/community/community.component';

const routes: Routes = [
  {
    path:"quiz",
    component: QuizComponent,
    children: [
      {path:'',component:QuizComponent},  
    ]
  },
  
  { path: '', component: MainComponent ,children: [
    {path:'home',component:HomeComponent}, 
    {path:'contact',component:ContactComponent} ,
    {path:'courses',component:CoursesComponent},
    {path:'WhyChooseUsComponent',component:WhyChooseUsComponent},
    {path:'WhoAreWeComponent',component:WhoAreWeComponent},
    {path:'RecommendedCourses',component:RecommendedCoursesComponent},
    {path:'Community',component:CommunityComponent}
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
