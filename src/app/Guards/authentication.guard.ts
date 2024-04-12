import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { CoursesService } from '../Services/courses.service';
import { Title } from '@angular/platform-browser';
import { site_title } from '../Models/Title';

export const authenticationCanActivateFnGuard: CanActivateFn = (route, state) => {
  
  const authentication = inject(AuthenticationService)
  const router = inject(Router)

  if(authentication.isLooged_static === true){
    return true
  }
  else{
    router.navigate(['/SignIn'])
    return false;
  }
};


export const TitleResolver = (route: ActivatedRouteSnapshot) => {
  const service: CoursesService = inject(CoursesService)
  const titleService: Title = inject(Title)

  const id = route.paramMap.get('id')

  if(typeof(id) === 'string' && id){
    const temp_title = service.get_course(parseInt(id))

    if(temp_title){
      titleService.setTitle(`${site_title} - ${temp_title.title}`)
    }

  }
}