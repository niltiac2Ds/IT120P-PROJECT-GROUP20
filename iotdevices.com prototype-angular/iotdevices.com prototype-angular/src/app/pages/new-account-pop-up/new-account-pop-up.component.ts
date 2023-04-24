import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'new-account-pop-up',
  templateUrl: 'new-account-pop-up.component.html',
  styleUrls: ['new-account-pop-up.component.css'],
})
export class NewAccountPopUp {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
