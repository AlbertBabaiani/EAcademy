import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy{

  menu_opened: boolean = false

  isLogged: boolean = false

  user!: User
  private user_subscription!: Subscription

  private authentication: AuthenticationService = inject(AuthenticationService)
  private isLogged_subscription!: Subscription

  ngOnInit(): void {
    this.isLogged_subscription = this.authentication.isLogged.subscribe({
      next: (isLogged) =>{
        this.isLogged = isLogged
      }
    })

    this.user_subscription = this.authentication.user.subscribe({
      next: (user: User) =>{
        this.user = user
      }
    })
  }

  change_menu(): void{
    this.menu_opened = !this.menu_opened
  }

  logout(): void{
    this.authentication.logout()
  }

  ngOnDestroy(): void {
    if(this.isLogged_subscription){
      this.isLogged_subscription.unsubscribe()
    }

    if(this.user_subscription){
      this.user_subscription.unsubscribe()
    }
  }
}
