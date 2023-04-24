import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'delete-account-success-pop-up',
  templateUrl: 'delete-account-success-pop-up.component.html',
  styleUrls: ['delete-account-success-pop-up.component.css'],
})
export class DeleteAccountSuccessPopUp {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
