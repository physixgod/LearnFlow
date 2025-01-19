import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // @Post()
  // create(@Body() createCourseDto: CreateCourseDto) {
  //   return this.courseService.create(createCourseDto);
  // }

  @Get("all")
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.courseService.find(name);
  }
  @Get()
  findFilter(@Query() filter: any) {
    return this.courseService.findFilter(filter);
  }

  @Post("recommended")
  getRecommendedCourses(@Body() answers: any) {
    return this.courseService.getRecommendedCourses(answers);
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
  //   return this.courseService.update(+id, updateCourseDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.courseService.remove(+id);
  // }
}
