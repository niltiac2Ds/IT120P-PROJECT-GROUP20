import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'home-page-admin',
  templateUrl: 'home-page-admin.component.html',
  styleUrls: ['home-page-admin.component.css'],
})
export class HomePageAdmin {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
