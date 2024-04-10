import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  tax: number = 47.41

  course!: ICourse

  ngOnInit(): void {
    this.course = history.state
  }
}
