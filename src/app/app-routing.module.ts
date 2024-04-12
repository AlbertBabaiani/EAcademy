import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './Pages/courses-list/courses-list.component';
import { ErrorComponent } from './Pages/error/error.component';
import { CourseDetailsComponent } from './Pages/courses-list/course-details/course-details.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { TitleResolver, authenticationCanActivateFnGuard } from './Guards/authentication.guard';
import { CheckoutComponent } from './Pages/courses-list/checkout/checkout.component';
import { AllComponent } from './Pages/courses-list/all/all.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { AboutComponent } from './Pages/about/about.component';

const routes: Routes = [
  {path: 'Courses', component: CoursesListComponent,
    children: [
      {path: '', component: AllComponent, title: 'Courses'},
      {path: 'Course/:id', component: CourseDetailsComponent, resolve: [TitleResolver]},
      {path: 'CheckOut', component: CheckoutComponent, canActivate: [authenticationCanActivateFnGuard], title: 'Checkout'},
    ]
  },

  {path: 'About', component: AboutComponent, title: 'About'},

  {path: 'SignIn', component: SignInComponent, title: 'Sign In your account'},
  {path: 'SignUp', component: SignUpComponent, title: 'Create a new account'},

  {path: '', redirectTo: 'Courses', pathMatch: 'full'},
  {path: '**', component: ErrorComponent, title: 'Error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
