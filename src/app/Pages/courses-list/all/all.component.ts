import { Component, OnInit, inject } from '@angular/core';
import { ICourse } from 'src/app/Models/course';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit{
  private courses_service: CoursesService = inject(CoursesService)

  courses: ICourse[] = []

  search_text: string = ''

  ngOnInit(): void {
    this.courses = this.courses_service.courses
  }

  search_course(): void{
    const course = this.search_text.toLocaleLowerCase().trim()

    if(course){
      const response = this.courses_service.search_course(course)

      this.courses = response

    }
    else{
      this.courses = this.courses_service.courses
    }
  }
}
