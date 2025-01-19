import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { RecommendedCoursesComponent } from './components/recommended-courses/recommended-courses.component';
import { FormsModule } from '@angular/forms';
import { CommunityComponent } from './components/community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuizComponent,
    MainComponent,
    ContactComponent,
    CoursesComponent,
    WhoAreWeComponent,
    WhyChooseUsComponent,
    RecommendedCoursesComponent,
    CommunityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
