import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @ViewChild('username')
  private username!: ElementRef
  
  @ViewChild('userpassword')
  private userpassword!: ElementRef
  

  private authentication: AuthenticationService = inject(AuthenticationService)

  signIn() {
    if(this.username.nativeElement.value.trim() &&
    this.userpassword.nativeElement.value.trim()){
    
      const response = this.authentication.login(
        this.username.nativeElement.value.trim(),
        this.userpassword.nativeElement.value.trim()
      )

      if(!response){
        this.username.nativeElement.value = ''
        this.userpassword.nativeElement.value = ''

        alert('Incorrect username or password!')
      }
    }
  }
}
