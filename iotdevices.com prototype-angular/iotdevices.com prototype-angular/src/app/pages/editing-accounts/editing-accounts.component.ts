import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'editing-accounts',
  templateUrl: 'editing-accounts.component.html',
  styleUrls: ['editing-accounts.component.css'],
})
export class EditingAccounts {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
