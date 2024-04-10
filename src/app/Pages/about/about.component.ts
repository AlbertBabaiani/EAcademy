import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly author: string = 'Albert Babayan'
  readonly git_Hub_Link: string = 'https://github.com/AlbertBabaiani'
}
