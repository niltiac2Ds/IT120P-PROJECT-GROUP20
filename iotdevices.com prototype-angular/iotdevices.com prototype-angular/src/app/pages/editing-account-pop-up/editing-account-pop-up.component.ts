import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'editing-account-pop-up',
  templateUrl: 'editing-account-pop-up.component.html',
  styleUrls: ['editing-account-pop-up.component.css'],
})
export class EditingAccountPopUp {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
