import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'welcome-login-page',
  templateUrl: 'welcome-login-page.component.html',
  styleUrls: ['welcome-login-page.component.css'],
})
export class WelcomeLoginPage {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
