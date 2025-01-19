import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CourseService } from '../course/course.service';
import { CreateCourseDto } from '../course/dto/create-course.dto';
import { CreateMessageDto } from '../message/dto/create-message.dto';
import { MessageService } from 'src/message/message.service';
@Injectable()
export class UserService {
  constructor (private courseService:CourseService,private messageService:MessageService){

  }
  
  private users=[
    {
      id:1,
      name:"mostfa",
      email:"mostfa@gmail.com",
      password:"123456",
      courses:["Node.js","React.js","Angular"],
    }
  ]
  create(createUserDto: CreateUserDto) {
    const id = this.users.length + 1;

    this.users.push({ id, ...createUserDto,courses:[] });  // Spread the properties of createUserDto
    return this.users;
}

  findAll() {
    return this.users;
  }

  findOne(name: string) {
    const user=this.users.find(user => user.name === name);
    if (!user) return "User not found";
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return  "User not found";
    this.users[index] = { ...this.users[index], ...updateUserDto };  // Spread the properties of updateUser

    return this.users[index];
  }

  remove(name: string) {
    const index = this.users.findIndex(user => user.name === name);
    if (index === -1) return "User not found";
    this.users.splice(index, 1);
    return index;
  }
  addCourse(name:string,createCourseDto:CreateCourseDto) {
    const user = this.users.find(user => user.name === name);
    if (!user) return "User not found";
    this.users[user.id-1].courses.push(createCourseDto.name);
    this.courseService.create(createCourseDto);
    return "user found ";
  }
  // updateCourse(name:string,updateCourseDto:UpdateUserDto){
  //   const user = this.users.find(user => user.name === name);
  //   if (!user) return "User not found";
  //   this.courseService.update(1,updateCourseDto);
  //   return user;
  // } 
  // removeCourse()
  // {

  // }

  askQuestion(createMessageDto:CreateMessageDto){
    this.messageService.create(createMessageDto);
    return;
  }

  answerQuestion(questionId:number,answer:string){
    this.messageService.answerQuestion(questionId,answer);
    return;
  }

}
