// course/course.schema.ts
import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;
@Schema()
export class Course {
    @Prop({ required: true,unique:true,auto:true })
    id: number;
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: 0 })
  price: number;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ required: true })
  category: string;

  @Prop({ default: 0 })
  views: number;

  @Prop({required:true})
  duration: number;

  @Prop({ required: true })
  creator: string;

  @Prop({ required: true })
    lessons: string[];
    @Prop({ required: true,enum:['Beginner','Intermediate','Advanced'] })
    difficulty: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
