import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'home-page-user',
  templateUrl: 'home-page-user.component.html',
  styleUrls: ['home-page-user.component.css'],
})
export class HomePageUser {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
