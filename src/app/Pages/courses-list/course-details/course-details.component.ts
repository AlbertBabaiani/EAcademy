import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICourse } from 'src/app/Models/course';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit, OnDestroy{
  course_id: number = 0
  selectedCourse!: ICourse
  all_courses_quantity: number = 0

  private service: CoursesService = inject(CoursesService)

  private activated_route: ActivatedRoute = inject(ActivatedRoute)
  private activated_route_subscription!: Subscription

  private router: Router = inject(Router)

  ngOnInit(): void {
    this.activated_route_subscription = this.activated_route.paramMap.subscribe({
      next: (query: ParamMap) => {
        const response: string | null = query.get('id')

        if(response){
          const converted = Number(response)

          if(converted){

            const response: ICourse | undefined = this.service.get_course(converted)

            if(response){
              this.course_id = response.id
              this.selectedCourse = response
              this.all_courses_quantity = this.service.all_courses_quantity
            }
            else{
              this.router.navigate(['Error'])
            }
          }
          else{
            this.router.navigate(['Error'])
          }

        }
      }
    })
  }

  ngOnDestroy(): void {
    if(this.activated_route_subscription){
      this.activated_route_subscription.unsubscribe()
    }
  }
}
