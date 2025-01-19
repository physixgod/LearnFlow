import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CourseService } from 'src/course/course.service';
import { MessageService } from 'src/message/message.service';

@Module({
  controllers: [UserController],
  providers: [UserService,CourseService,MessageService],
})
export class UserModule {}
