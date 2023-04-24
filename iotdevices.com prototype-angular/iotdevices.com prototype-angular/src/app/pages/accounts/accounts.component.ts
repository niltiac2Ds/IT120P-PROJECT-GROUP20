import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-accounts',
  templateUrl: 'accounts.component.html',
  styleUrls: ['accounts.component.css'],
})
export class Accounts {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
