import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Message } from 'src/message/entities/message.entity';
import { courses } from './coursesList';

@Injectable()
export class CourseService {
  public courses = courses;
  create(createCourseDto: CreateCourseDto) {
    const id = this.courses.length + 1;
    console.log({ id:id, ...createCourseDto });
    const res =this.courses.push({ id:id, ...createCourseDto });
    console.log("res: ",this.courses)
    return {Message:"Course created successfully",data:this.courses};
  }

  findAll() {
    console.log("from getAll: ");
    return this.courses;
  }

  find(name:string){
    const courses = this.courses.find(course => course.name === name);
    
    return courses;
  }

  findFilter(filter:any){
    console.log("filter: ",filter);
    let courses=[];
    filter?.name && (courses = this.courses.filter(course => course.name.startsWith(filter.name)));
    filter?.category && (courses = this.courses.filter(course => course.category.startsWith(filter.category)));
    filter?.difficulty && (courses = this.courses.filter(course => course.difficulty.startsWith(filter.difficulty)));
    filter?.price && (courses = this.courses.filter(course => course.price===Number(filter.price)));
    filter?.rating && (courses = this.courses.filter(course => course.rating===Number(filter.rating)));
    filter?.creator && (courses = this.courses.filter(course => course.creator.startsWith(filter.creator)));
    filter?.views && (courses = this.courses.filter(course => course.views===Number(filter.views)));
    filter?.duration && (courses = this.courses.filter(course => course.duration===Number(filter.duration)));
    
    return courses;
  }
  getRecommendedCourses(answers:any) {
    const { ageGroup, timePerWeek, aiSkillLevel, motivation, contentPreference } = answers;
  
    let filteredCourses = courses;
  
    // Filter by skill level
    if (aiSkillLevel === 'Beginner') {
      filteredCourses = filteredCourses.filter(course => course.difficulty === 'Beginner');
    } else if (aiSkillLevel === 'Intermediate') {
      console.log("intermediate");
      filteredCourses = filteredCourses.filter(course => course.difficulty === 'Intermediate');
    } else if (aiSkillLevel === 'Advanced') {
      filteredCourses = filteredCourses.filter(course => course.difficulty === 'Advanced');
    }
  
    // // Filter by motivation (e.g., Career Growth might prefer certain types of courses)
    if (motivation === 'Career Growth') {
      filteredCourses = filteredCourses.filter(course => course.category === 'AI' || course.category === 'Career Development');
    }else if (motivation === 'Personal Interest') {
      filteredCourses = filteredCourses.filter(course => course.category === 'AI' || course.category === 'Web Development');
    }
    // // Filter by available time per week (less hours = shorter courses)
    if (timePerWeek === 'Less than 5 hours') {
      filteredCourses = filteredCourses.filter(course => course.duration <= 10);  // Filter short courses
    } else if (timePerWeek === '5-10 hours') {
      filteredCourses = filteredCourses.filter(course => course.duration > 10 && course.duration <= 20);  // Medium-length courses
    } else if (timePerWeek === 'More than 10 hours') {
      filteredCourses = filteredCourses.filter(course => course.duration > 20);  // Long courses
    }
    
    
    
  
    return filteredCourses;
  }
  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }
}
