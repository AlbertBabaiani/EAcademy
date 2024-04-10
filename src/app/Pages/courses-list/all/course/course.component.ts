import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/Models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input()
  course!: ICourse
}
