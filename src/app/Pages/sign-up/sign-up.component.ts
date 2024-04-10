import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @ViewChild('name')
  private name!: ElementRef

  @ViewChild('username')
  private username!: ElementRef
  
  @ViewChild('userpassword')
  private userpassword!: ElementRef

  @ViewChild('repeatuserpassword')
  private repeatuserpassword!: ElementRef
  

  private authentication: AuthenticationService = inject(AuthenticationService)

  add_new_user() {
    if(this.name.nativeElement.value.trim() &&
      this.username.nativeElement.value.trim() &&
      this.userpassword.nativeElement.value.trim() &&
      this.repeatuserpassword.nativeElement.value.trim() &&
      this.repeatuserpassword.nativeElement.value.trim() === this.userpassword.nativeElement.value.trim()
    ){
    
      const response = this.authentication.add_new_user(
        this.name.nativeElement.value.trim(),
        this.username.nativeElement.value.trim(),
        this.userpassword.nativeElement.value.trim()
      )

      if(!response){
        alert('Error!')
      }
    }
    else{
      alert('Error!')
    }
  }
}
