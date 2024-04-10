import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: User[] = [
    new User(1, 'John Smith', 'js', '12345'),
    new User(2, 'Merry Jane', 'mj', '12345'),
    new User(3, 'Mark Vought', 'mv', '12345'),
    new User(4, 'Sarah King', 'sk', '12345')
  ]

}
