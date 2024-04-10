import { Injectable, inject } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../Models/User';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private users: UsersService = inject(UsersService)
  private router: Router = inject(Router)

  private user$: Subject<User> = new Subject<User>()

  private isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _isLogged: boolean = false

  login(username: string, password: string): boolean{
    const response = this.users.users.find( (user: User) => user.username === username && user.password === password )

    if(response){

      this.isLogged$.next(true)
      this._isLogged = true
      this.user$.next(response)
      
      this.router.navigate(['/Courses'])
      return true
    }
    else{
      return false
    }
  }

  add_new_user(name: string, username: string, password: string): boolean{
    const response = this.users.users.find( (user: User) => user.username === username )

    if(response){
      return false
    }

    else{
      const new_user: User = new User(this.users.users.length, name, username, password)
      this.users.users.push(new_user)

      this.isLogged$.next(true)
      this._isLogged = true
      this.user$.next(new_user)

      this.router.navigate(['/Courses'])

      return true
    }
  }

  get isLogged(): Observable<boolean>{
    return this.isLogged$.asObservable()
  }

  get isLooged_static(): boolean{
    return this._isLogged
  }

  get user(): Observable<User>{
    return this.user$.asObservable()
  }

  logout(): void{
    this.isLogged$.next(false)
    this._isLogged = false
    this.router.navigate(['/SignIn'])
  }
}
