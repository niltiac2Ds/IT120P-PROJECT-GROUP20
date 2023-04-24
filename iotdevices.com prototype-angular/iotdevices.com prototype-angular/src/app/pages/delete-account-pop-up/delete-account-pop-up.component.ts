import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'delete-account-pop-up',
  templateUrl: 'delete-account-pop-up.component.html',
  styleUrls: ['delete-account-pop-up.component.css'],
})
export class DeleteAccountPopUp {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
