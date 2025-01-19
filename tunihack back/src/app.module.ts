import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { MessageModule } from './message/message.module';
import {MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [UserModule, CourseModule, MessageModule,MongooseModule.forRoot('mongodb+srv://louam-lemjid:8hAgfKf2ZDauLxoj@cluster0.mjqmopn.mongodb.net/Notificationdb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
