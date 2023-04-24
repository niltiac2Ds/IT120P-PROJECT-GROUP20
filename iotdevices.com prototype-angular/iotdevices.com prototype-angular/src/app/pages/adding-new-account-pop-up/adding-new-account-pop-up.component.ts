import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'adding-new-account-pop-up',
  templateUrl: 'adding-new-account-pop-up.component.html',
  styleUrls: ['adding-new-account-pop-up.component.css'],
})
export class AddingNewAccountPopUp {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
