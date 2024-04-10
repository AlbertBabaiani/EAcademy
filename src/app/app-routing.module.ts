import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './Pages/courses-list/courses-list.component';
import { ErrorComponent } from './Pages/error/error.component';
import { CourseDetailsComponent } from './Pages/courses-list/course-details/course-details.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { authenticationCanActivateFnGuard } from './Guards/authentication.guard';
import { CheckoutComponent } from './Pages/courses-list/checkout/checkout.component';
import { AllComponent } from './Pages/courses-list/all/all.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { AboutComponent } from './Pages/about/about.component';

const routes: Routes = [
  {path: 'Courses', component: CoursesListComponent,
    children: [
      {path: 'All', component: AllComponent},
      {path: 'Course/:id', component: CourseDetailsComponent},
      {path: 'CheckOut', component: CheckoutComponent, canActivate: [authenticationCanActivateFnGuard]},
      {path: '', redirectTo: 'All', pathMatch: 'full' }
    ]
  },

  {path: 'About', component: AboutComponent},

  {path: 'SignIn', component: SignInComponent},
  {path: 'SignUp', component: SignUpComponent},

  {path: '', redirectTo: 'Courses', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
