import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { CoursesListComponent } from './Pages/courses-list/courses-list.component';
import { ErrorComponent } from './Pages/error/error.component';
import { CourseComponent } from './Pages/courses-list/all/course/course.component';
import { CourseDetailsComponent } from './Pages/courses-list/course-details/course-details.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { CheckoutComponent } from './Pages/courses-list/checkout/checkout.component';
import { AllComponent } from './Pages/courses-list/all/all.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CoursesListComponent,
    ErrorComponent,
    CourseComponent,
    CourseDetailsComponent,
    SignInComponent,
    CheckoutComponent,
    AllComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
